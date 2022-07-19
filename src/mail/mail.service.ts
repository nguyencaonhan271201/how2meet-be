import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import {MailInformationDto} from './dto/mail-infor.dto';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendMail(mailInfo: MailInformationDto): Promise<boolean>{

    this.mailerService
      .sendMail({
        to: mailInfo.usermails, // list of receivers
        from: process.env.SENDER_ADDRESS, // sender address
        subject: mailInfo.subject, // Subject line
        text: mailInfo.text, // plaintext body
        html: mailInfo.HTMLBody?? "", // HTML body content
      })
    return 
  }
}