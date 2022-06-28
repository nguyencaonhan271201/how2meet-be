import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Meeting } from './entities/meeting.entity';
import { MeetingService } from './meeting.service';

@Controller('meeting')
@ApiTags('Meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

    @Post()
    async create(@Body() createMeetingDto: CreateMeetingDto): Promise<Meeting | null>{
      return await this.meetingService.create(createMeetingDto);
    }
    
    @Get()
    async findAll(){
      return this.meetingService.findAll();
    }

    @Get(':id')
      async findOne(@Param('id') id: string): Promise<Meeting | null> {
        return await this.meetingService.findById(id);
      }
    
    @Put(':id')
    async update (@Param('id') id: string, @Body() updateMeetingDto: UpdateMeetingDto): Promise<boolean | null>{
      return await this.meetingService.update(id, updateMeetingDto);
    }
  
}
