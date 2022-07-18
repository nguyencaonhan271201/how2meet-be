import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";
import { User } from "src/users/entities/user.entity";

export class CreateMeetingImagesDto {
	@ApiProperty()
	imageURL: string;

	@ApiProperty()
	meetingID: string;

	@ApiProperty()
	creator: User;
}