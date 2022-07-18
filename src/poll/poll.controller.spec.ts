import { Test, TestingModule } from '@nestjs/testing';
import { PollController } from './poll.controller';
import { PollService } from './poll.service';

describe('PollController', () => {
  let pollController: PollController;

  beforeEach(async () => {
    const Poll: TestingModule = await Test.createTestingModule({
      controllers: [PollController],
      providers: [PollService],
    }).compile();

    pollController = Poll.get<PollController>(PollController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
