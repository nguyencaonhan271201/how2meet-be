import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingMinutes, MeetingMinutesSchema } from './entities/meetingminutes.entity';
import { MeetingMinutesController } from './meetingminutes.controller';
import { MeetingMinutesService } from './meetingminutes.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MeetingMinutes.name, schema: MeetingMinutesSchema }])],
  controllers: [MeetingMinutesController],
  providers: [MeetingMinutesService],
  exports: [MeetingMinutesService]
})
export class MeetingMinutesModule {}
