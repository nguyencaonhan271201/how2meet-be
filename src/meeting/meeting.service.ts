import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class MeetingService extends BaseService<Meeting> {
  constructor(
  @InjectModel(Meeting.name) private readonly meetingModel: Model<Meeting>,
) {
  super(meetingModel);
}
}
