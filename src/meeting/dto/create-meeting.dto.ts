import { ApiProperty } from "@nestjs/swagger";
import { Date } from "mongoose";
import { User } from "src/users/entities/user.entity";
import { DateBlocks, PollOptions } from "../entities/dateBlocks.entity";

export class CreateMeetingDto {
  @ApiProperty()
	title: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	location: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	creator: User;

	@ApiProperty()
	date: Date[];

	@ApiProperty()
	isBonding: boolean;

	@ApiProperty()
	dateBlocks: DateBlocks[];

  @ApiProperty()
	poll: PollOptions[];

	@ApiProperty()
	pollLetUserAdd: boolean;

	@ApiProperty()
	pollIsLimitChoice: boolean;

	@ApiProperty()
	pollChoicesLimit: number;

	@ApiProperty()
	isPublic: boolean;

	@ApiProperty()
	meetingID: string;

	@ApiProperty()
	invitators: User[];
}