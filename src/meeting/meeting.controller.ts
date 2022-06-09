import { Controller, Get } from '@nestjs/common';
import { MeetingService } from './meeting.service';

@Controller()
export class MeetingController {
  constructor(private readonly MeetingService: MeetingService) {}
}
