import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Meeting, MeetingSchema } from './entities/meeting.entity';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { SendEmailService } from './../mail/mail.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }])],
  controllers: [MeetingController],
  providers: [MeetingService, SendEmailService],
  exports: [MeetingService]
})
export class MeetingModule {}
