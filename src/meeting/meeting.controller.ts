import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MeetingService } from './meeting.service';

@Controller('meeting')
@ApiTags('Meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}
    
    @Get()
    async findAll(){
      return this.meetingService.findAll();
    }
    
  
}
