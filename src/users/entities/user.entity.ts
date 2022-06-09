import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/base/entities/base.entity';

@Schema({ collection: 'Users', timestamps: true })
export class User extends BaseEntity { 	
	@Prop()
	firebase_id: string;

	@Prop()
	email: string;

	@Prop()
	password: string;

	@Prop()
	image: string;

    @Prop()
	name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
