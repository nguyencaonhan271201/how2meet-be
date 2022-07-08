import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';
import { User } from 'src/users/entities/user.entity';
import { Exclude } from 'class-transformer';
import { ExcludeProperty } from 'nestjs-mongoose-exclude';

@Schema({ collection: 'MeetingMinutes', timestamps: true })
export class MeetingMinutes extends BaseEntity { 	
	@Prop()
	content: string;

	@Prop()
	meetingID: string;

	@Prop()
	creator: User;
}

export const MeetingMinutesSchema = SchemaFactory.createForClass(MeetingMinutes);
