import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';

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
	image: string;

	@Prop()
	creator: string;

  @Prop()
	date: Date[];

	@Prop({default:  null})
	time_slots: boolean[]

	@Prop({default: null})
	invitations: Invitation[]

	@Prop({default: null})
	freetime_slots: Freetime_slot[]
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
