import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { CreateMeetingDto } from './dto/create-meeting.dto';
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
  async findMeetings(@Param('firebase_id') firebase_id: string) {
    let hostingMeetings = await this.meetingService.findByConditions({ creator: firebase_id });
    
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

  @Post('updateMeetingParticipantsProfile')
  async update(@Body() updateUserDto: UpdateUserDto) {
    let meetingsList = await this.findMeetings(updateUserDto.firebase_id);

    meetingsList.forEach(async (meeting: any) => {
      let cloneMeeting = meeting;

      cloneMeeting.invitators.forEach((invitator: any) => {
        if (invitator.firebase_id === updateUserDto.firebase_id) {
          invitator.name = updateUserDto.name;
          invitator.image = updateUserDto.image;
        }
      })

      await this.meetingService.update(meeting._id, cloneMeeting);
    })

    return true;
  }
}
