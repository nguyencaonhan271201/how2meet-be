import { Controller, Get } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller()
export class PollController {
  constructor(private readonly PollService: PollService) {}
}
