import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailInformationDto } from './dto/mail-infor.dto';

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

  public async sendMail(mailInfo: MailInformationDto): Promise<boolean>{

    this.mailerService
      .sendMail({
        to: mailInfo.usermails,
        from: `"How2Meet?" <${process.env.SENDER_ADDRESS}>`,
        subject: mailInfo.subject,
        html: mailInfo.HTMLBody?? "",
      })
    return 
  }
}