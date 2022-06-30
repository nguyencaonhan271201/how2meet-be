import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';
import { User } from 'src/users/entities/user.entity';
import { DateBlocks, PollOptions } from './dateBlocks.entity';

@Schema()
export class MinuteDetail{
	@Prop({default: null})
	content: string;

	@Prop({default: null})
	time: string;
}

@Schema()
export class Minute extends BaseEntity{
	@Prop()
	creator: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop({default: null})
	details: MinuteDetail[]
}

@Schema({ _id: false })
export class Freetime_slot{ 	
	@Prop()
	user_id: string;//PK

	@Prop()
	time_slots: Date[];
}
@Schema({ _id: false })
export class Invitation{ 	
	@Prop()
	user_id: string;//PK

	@Prop({default: false})
	accepted: boolean;

	@Prop()
	join: string;
}

@Schema({ collection: 'Meeting', timestamps: true })
export class Meeting extends BaseEntity { 	
	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	creator: string;

	@Prop()
	date: Date[];

	@Prop()
	isBonding: boolean;

	@Prop()
	dateBlocks: DateBlocks[];

  @Prop()
	poll: PollOptions[];

	@Prop()
	pollLetUserAdd: boolean;

	@Prop()
	pollIsLimitChoice: boolean;

	@Prop()
	pollChoicesLimit: number;

	@Prop()
	isPublic: boolean;

	@Prop()
	meetingID: string;

	@Prop()
	invitators: User[];
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
