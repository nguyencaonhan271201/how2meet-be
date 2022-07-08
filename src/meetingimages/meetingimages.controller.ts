import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SanitizeMongooseModelInterceptor } from 'nestjs-mongoose-exclude';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
import { CreateMeetingImagesDto } from './dto/create-meeting-images.dto';
import { MeetingImages } from './entities/meetingimages.entity';
import { MeetingImagesService } from './meetingimages.service';

@Controller('meetingimages')
@ApiTags('MeetingImages')
export class MeetingImagesController {
  constructor(private readonly meetingImagesService: MeetingImagesService) {}
    
  @Get()
  async findAll(){
    return this.meetingImagesService.findAll();
  }

  @Get(':meeting_id')
  async findAllImagesOfMeeting(@Param('meeting_id') meeting_id: string){
    return this.meetingImagesService.findByConditions({ meetingID: meeting_id });
  }

  @Post()
  async create(@Body() image: CreateMeetingImagesDto): Promise<MeetingImages>{
    return await this.meetingImagesService.create(image);
  }

  @Delete(':image_id')
  async deleteById(@Param('image_id') image_id: string) {
    return await this.meetingImagesService.remove(image_id);
  }
}
