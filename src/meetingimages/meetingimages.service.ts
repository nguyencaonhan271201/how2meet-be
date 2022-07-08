import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { MeetingImages } from './entities/meetingimages.entity';

@Injectable()
export class MeetingImagesService extends BaseService<MeetingImages> {
  constructor(
  @InjectModel(MeetingImages.name) private readonly meetingImagesModel: Model<MeetingImages>,
) {
  super(meetingImagesModel);
}
}
