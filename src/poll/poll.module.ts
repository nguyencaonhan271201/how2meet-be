import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Poll, PollSchema } from './entities/Poll.entity';
import { PollController } from './Poll.controller';
import { PollService } from './Poll.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Poll.name, schema: PollSchema }])],
  controllers: [PollController],
  providers: [PollService],
  exports: [PollService]
})
export class PollModule {}
