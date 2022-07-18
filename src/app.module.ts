import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { MeetingModule } from './meeting/meeting.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ['.env.development.local', '.env'], isGlobal: true}),
    MailerModule.forRoot({
      transport: `smtps://${process.env.SENDER_ADDRESS}:${process.env.MAIL_SENDING_PASSWORD}@smtp.gmail.com`,
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      }}),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule, 
    MeetingModule, 
    MailModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
