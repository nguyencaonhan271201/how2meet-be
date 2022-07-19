
import { MailerModule, MailerService } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { SendEmailController } from "./mail.controller";
import { SendEmailService } from "./mail.service";

@Module({
    imports: [MailerModule.forRoot({
      transport: `smtps://${process.env.SENDER_ADDRESS}:${process.env.MAIL_SENDING_PASSWORD}@smtp.gmail.com`,
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      }}),],
    controllers: [SendEmailController],
    providers: [SendEmailService],
    exports: [SendEmailService]
  })
  export class MailModule {}