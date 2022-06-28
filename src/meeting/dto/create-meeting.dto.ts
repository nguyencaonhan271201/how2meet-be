import { ApiProperty } from "@nestjs/swagger";

export interface MinuteDetail {
	content: string;
	time: string;
}

export interface Minute{
	creator: string;
	title: string;
	description: string;
	details: MinuteDetail[]
}

export interface Freetime_slot{ 
	user_id: string;//PK
	time_slots: Date[];
}

export interface Invitation{
	user_id: string;//PK
	accepted: boolean;
	join: string;
}

export  class CreateMeetingDto  { 	
	@ApiProperty()
	title: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	image: string;

	@ApiProperty()
	creator: string;

    @ApiProperty()
	date: Date;

	@ApiProperty()
	time_slots: Date[]

	@ApiProperty()
	invitations: Invitation[]

	@ApiProperty()
	freetime_slots: Freetime_slot[]
}
