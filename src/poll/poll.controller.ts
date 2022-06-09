import { Controller, Get } from '@nestjs/common';
import { PollService } from './Poll.service';

@Controller()
export class PollController {
  constructor(private readonly PollService: PollService) {}
}
