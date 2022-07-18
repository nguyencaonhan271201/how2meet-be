import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { Poll } from './entities/poll.entity';

@Injectable()
export class PollService extends BaseService<Poll> {
    constructor(
		@InjectModel(Poll.name) private readonly pollModel: Model<Poll>,
	) {
		super(pollModel);
	}

    private async findByMeetingId(meeting_id: string): Promise<Poll[]>{
        return await this.findByConditions({meeting_id: meeting_id});
    }
}
