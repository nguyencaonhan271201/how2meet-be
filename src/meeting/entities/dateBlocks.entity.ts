
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';

@Schema() 
export class Selector {
	@Prop()
	name: string;

	@Prop()
	profileImage: string;
}

@Schema()
export class TimeSlots {
	@Prop()
	status: number;

	@Prop()
	selectors: Selector[]
}

@Schema()
export class DateBlocks extends BaseEntity {
	@Prop()
	date: Date;

	@Prop({default: false})
	isSelectable: boolean;

	@Prop()
	status: number;

	@Prop()
	timeSlots: TimeSlots[];
}

@Schema()
export class PollOptions {
	@Prop()
	description: string;

	@Prop()
	link: string;

	@Prop()
	location: string;

	@Prop()
	title: string;

	@Prop()
	type: number;
}

export const MeetingSchema = SchemaFactory.createForClass(DateBlocks);