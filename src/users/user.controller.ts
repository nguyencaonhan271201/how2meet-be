import { Body, Controller, Get, Logger, Post, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User')
export class UserController {
  logger: Logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger();
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User>{
    let findDuplicate = await this.userService.findByConditions({ firebase_id: user.firebase_id });
    if (findDuplicate.length === 0)
      return await this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]>{
    return await this.userService.findAll();
  }

  @Get('findByFirebaseID/:firebase_id')
  async findOne(@Param('firebase_id') firebase_id: string) {
    let results = await this.userService.findByConditions({ firebase_id: firebase_id });
    if (results.length > 0)
      return results[0];
  }
}
