import { Body, Controller, Get, Logger, Post, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

    //This to solve the case of provider login => cannot identify newly created account or old
    if (findDuplicate.length === 0)
      return await this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]>{
    return await this.userService.findAll();
  }

  // Find account by Firebase ID
  @Get('findByFirebaseID/:firebase_id')
  async findOne(@Param('firebase_id') firebase_id: string) {
    let results = await this.userService.findByConditions({ firebase_id: firebase_id });
    if (results.length > 0)
      return results[0];
  }

  @Get('findUsersByQuery/:query')
  async findOneByQuery(@Param('query') query: string) {
    let searchByName = await this.userService.findNameByKeyword(query);
    let searchByEmail = await this.userService.findEmailByKeyword(query);
    
    searchByEmail.forEach((user: any) => {
      let found = searchByName.some((element: any) => element.firebase_id === user.firebase_id);
      if (!found) {
        searchByName.push(user);
      }
    })

    return searchByName;
  }

  @Post('updateProfile')
  async update(@Body() updateUserDto: UpdateUserDto) {
    this.logger.log(JSON.stringify(updateUserDto));
    let results = await this.userService.findByConditions({ firebase_id: updateUserDto.firebase_id });
    if (results.length > 0)
    {
      let id = results[0]._id;
      this.logger.log(id);
      this.logger.log(updateUserDto);
      return await this.userService.update(id, updateUserDto);
    }
  }
}
