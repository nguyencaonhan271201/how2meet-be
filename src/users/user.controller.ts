import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User>{
    return await this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]>{
    return await this.userService.findAll();
  }
}
