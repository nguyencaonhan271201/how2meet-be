import { Test, TestingModule } from '@nestjs/testing';
import { MeetingController } from './Meeting.controller';
import { MeetingService } from './Meeting.service';

describe('MeetingController', () => {
  let meetingController: MeetingController;

  beforeEach(async () => {
    const Meeting: TestingModule = await Test.createTestingModule({
      controllers: [MeetingController],
      providers: [MeetingService],
    }).compile();

    meetingController = Meeting.get<MeetingController>(MeetingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
