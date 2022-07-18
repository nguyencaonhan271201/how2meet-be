import { ApiProperty } from "@nestjs/swagger";

export class MailInformationDto {
    @ApiProperty()
    usermails: string[];
    @ApiProperty()
    subject: string;
    @ApiProperty()
    text: string;
    HTMLBody?:string;
}