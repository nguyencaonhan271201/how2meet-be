import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
	) {
		super(userModel);
	}


  }
