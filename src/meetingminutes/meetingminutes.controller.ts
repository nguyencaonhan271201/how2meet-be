import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
import { CreateMeetingMinutesDto } from './dto/create-meeting-minutes.dto';
import { MeetingMinutes } from './entities/meetingminutes.entity';
import { MeetingMinutesService } from './meetingminutes.service';

@Controller('meetingminutes')
@ApiTags('MeetingMinutes')
export class MeetingMinutesController {
  constructor(private readonly meetingMinutesService: MeetingMinutesService) {}
    
  @Get()
  async findAll(){
    return this.meetingMinutesService.findAll();
  }

  @Get(':meeting_id')
  async findAllMinutesOfMeeting(@Param('meeting_id') meeting_id: string){
    return this.meetingMinutesService.findByConditions({ meetingID: meeting_id });
  }

  @Post()
  async create(@Body() image: CreateMeetingMinutesDto): Promise<MeetingMinutes>{
    return await this.meetingMinutesService.create(image);
  }

  @Delete(':minute_id')
  async deleteById(@Param('minute_id') minute_id: string) {
    return await this.meetingMinutesService.remove(minute_id);
  }
}
