import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReminderService } from './reminders.service';

@Controller('reminder')
@ApiTags('Reminder')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}
    
    @Post()
    async remindParticipants(){
      return null;
    }
    
  
}
