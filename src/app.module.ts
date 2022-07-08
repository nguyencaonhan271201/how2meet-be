import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingModule } from './meeting/meeting.module';
import { UserModule } from './users/user.module';
import { MeetingImagesModule } from './meetingimages/meetingimages.module';
import { MeetingMinutesModule } from './meetingminutes/meetingminutes.module'

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ['.env.development.local', '.env'], isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  UserModule, MeetingModule, MeetingImagesModule, MeetingMinutesModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
