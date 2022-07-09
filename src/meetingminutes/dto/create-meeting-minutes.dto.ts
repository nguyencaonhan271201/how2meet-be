import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";
import { User } from "src/users/entities/user.entity";

export class CreateMeetingMinutesDto {
	@ApiProperty()
	content: string;

	@ApiProperty()
	title: string;
	
	@ApiProperty()
	description: string;

	@ApiProperty()
	meetingID: string;

	@ApiProperty()
	creator: User;
}