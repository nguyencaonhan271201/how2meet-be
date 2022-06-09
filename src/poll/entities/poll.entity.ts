import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';

@Schema( {_id: false})
export class Location{
	@Prop()
	name: string;
	@Prop()
	image: string;
	@Prop()
	description: string;
	@Prop()
	votes: Vote[];
}

@Schema()
export class Action extends BaseEntity{
	@Prop() //title
	name: string;

	@Prop()
	image: string; //use for bg

	@Prop()
	votes: Vote[];
}

@Schema({ _id: false })
export class Vote extends BaseEntity{ 	
	@Prop()
	user_id: string;
}

@Schema({ collection: 'Poll', timestamps: true })
export class Poll extends BaseEntity { 	
	@Prop()
	mode: number;

	@Prop()
	meeting_id: string;

	@Prop()
	actions: Action[]
}

export const PollSchema = SchemaFactory.createForClass(Poll);
