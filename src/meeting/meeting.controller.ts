import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';
import { MeetingService } from './meeting.service';

@Controller('meeting')
@ApiTags('Meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}
    
  @Get()
  async findAll(){
    return this.meetingService.findAll();
  }
  
  @Post()
  async create(@Body() meeting: CreateMeetingDto): Promise<Meeting>{
    return await this.meetingService.create(meeting);
  }

  @Get('findByFirebaseID/:firebase_id')
  async findMeetingByFirebaseID(@Param('firebase_id') firebase_id: string) {
    let hostingMeetings = [];
    
    let meetings = await this.meetingService.findAll();
    meetings.forEach((meeting: any) => {
      meeting.invitators.forEach((invitator: any) => {
        if (invitator.firebase_id === firebase_id) {
          let found = hostingMeetings.some((element: any) => element._id.equals(meeting._id));
          if (!found) {
            hostingMeetings.push(meeting);
          }
        }
      })
    })

    return hostingMeetings;
  }

  @Get('findByMeetingID/:meeting_id')
  async findMeetingByMeetingID(@Param('meeting_id') meeting_id: string) {
    let meetingsList = await this.meetingService.findByConditions({ meetingID: meeting_id });
    if (meetingsList.length > 0)
      return meetingsList[0]
  }

  @Post('updateMeetingParticipantsProfile')
  async updateMeetingParticipantsProfile(@Body() updateUserDto: UpdateUserDto) {
    let meetingsList = await this.findMeetingByFirebaseID(updateUserDto.firebase_id);

    meetingsList.forEach(async (meeting: any) => {
      let cloneMeeting = meeting;

      cloneMeeting.invitators.forEach((invitator: any) => {
        if (invitator.firebase_id === updateUserDto.firebase_id) {
          invitator.name = updateUserDto.name;
          invitator.image = updateUserDto.image;
        }
      })

      if (cloneMeeting.creator.firebase_id === updateUserDto.firebase_id) {
        cloneMeeting.creator.name = updateUserDto.name;
        cloneMeeting.creator.image = updateUserDto.image;
      }

      await this.meetingService.update(meeting._id, cloneMeeting);
    })

    return true;
  }

  @Post('addInvitatorToMeeting/:meeting_id')
  async addInvitatorToMeeting(@Param('meeting_id') meeting_id: string, @Body() updateUserDto: User) {
    let meeting = await this.findMeetingByMeetingID(meeting_id);

    let cloneInvitators = [...meeting.invitators];
    cloneInvitators.push(updateUserDto);
    meeting.invitators = cloneInvitators;
    
    return await this.meetingService.update(meeting._id, meeting);
  }

  @Post('updateMeeting/:meeting_id')
  async updateMeetingById(@Param('meeting_id') meeting_id: string, @Body() meetingDto: UpdateMeetingDto) {
    let meeting = await this.findMeetingByMeetingID(meeting_id);
    return await this.meetingService.update(meeting._id, meetingDto);
  }
}
