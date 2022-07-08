import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { MeetingMinutes } from './entities/meetingminutes.entity';

@Injectable()
export class MeetingMinutesService extends BaseService<MeetingMinutes> {
  constructor(
  @InjectModel(MeetingMinutes.name) private readonly meetingMinutesModel: Model<MeetingMinutes>,
) {
  super(meetingMinutesModel);
}
}
