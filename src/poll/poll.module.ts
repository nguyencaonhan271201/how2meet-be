import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Poll, PollSchema } from './entities/poll.entity';
import { PollController } from './poll.controller';
import { PollService } from './poll.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Poll.name, schema: PollSchema }])],
  controllers: [PollController],
  providers: [PollService],
  exports: [PollService]
})
export class PollModule {}
