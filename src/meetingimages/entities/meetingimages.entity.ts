import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';
import { User } from 'src/users/entities/user.entity';
import { Exclude } from 'class-transformer';
import { ExcludeProperty } from 'nestjs-mongoose-exclude';

@Schema({ collection: 'MeetingImages', timestamps: true })
export class MeetingImages extends BaseEntity { 	
	@Prop()
	imageURL: string;

	@Prop()
	meetingID: string;

	@Prop()
	creator: User;
}

export const MeetingImagesSchema = SchemaFactory.createForClass(MeetingImages);
