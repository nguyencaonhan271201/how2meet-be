import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MailInformationDto } from './dto/mail-infor.dto';
import { SendEmailService } from './mail.service';

@Controller('sendMail')
@ApiTags('sendMail')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}
    
    @Post()
    async send(@Body() mailerInfo: MailInformationDto){
      return await this.sendEmailService.sendMail(mailerInfo);
    }
    
  
}
