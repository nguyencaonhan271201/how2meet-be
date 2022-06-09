import { Injectable } from '@nestjs/common';

@Injectable()
export class MeetingService {
  getHello(): string {
    return 'Hello World!';
  }
}
