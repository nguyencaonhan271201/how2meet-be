import { Test, TestingModule } from '@nestjs/testing';
import { MeetingMinutesController } from './meetingminutes.controller';
import { MeetingMinutesService } from './meetingminutes.service';

describe('MeetingMinutesController', () => {
  let meetingMinutesController: MeetingMinutesController;

  beforeEach(async () => {
    const MeetingImages: TestingModule = await Test.createTestingModule({
      controllers: [MeetingMinutesController],
      providers: [MeetingMinutesService],
    }).compile();

    meetingMinutesController = MeetingImages.get<MeetingMinutesController>(MeetingMinutesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
