import { ApiProperty } from "@nestjs/swagger";

export class CreateMeetingDto {
  @ApiProperty()
	title: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	creator: string;

	@ApiProperty()
	date: Array<string>;

  @ApiProperty()
	time_slots: Array<boolean>;

	@ApiProperty()
	invitations: Array<string>;
}