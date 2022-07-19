
import { Module } from "@nestjs/common";
import { ReminderController } from "./reminders.controller";
import { ReminderService } from "./reminders.service";

@Module({
    imports: [],
    controllers: [ReminderController],
    providers: [ReminderService],
    exports: [ReminderService]
  })
  export class ReminderModule {}