import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingImages, MeetingImagesSchema } from './entities/meetingimages.entity';
import { MeetingImagesController } from './meetingimages.controller';
import { MeetingImagesService } from './meetingimages.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MeetingImages.name, schema: MeetingImagesSchema }])],
  controllers: [MeetingImagesController],
  providers: [MeetingImagesService],
  exports: [MeetingImagesService]
})
export class MeetingImagesModule {}
