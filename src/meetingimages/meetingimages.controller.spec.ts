import { Test, TestingModule } from '@nestjs/testing';
import { MeetingImagesController } from './meetingimages.controller';
import { MeetingImagesService } from './meetingimages.service';

describe('MeetingImagesController', () => {
  let meetingImagesController: MeetingImagesController;

  beforeEach(async () => {
    const MeetingImages: TestingModule = await Test.createTestingModule({
      controllers: [MeetingImagesController],
      providers: [MeetingImagesService],
    }).compile();

    meetingImagesController = MeetingImages.get<MeetingImagesController>(MeetingImagesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
    });
  });
});
