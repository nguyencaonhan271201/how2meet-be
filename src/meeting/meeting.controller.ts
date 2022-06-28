import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
}
