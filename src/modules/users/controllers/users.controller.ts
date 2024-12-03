import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAllUsers();
    return users;
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const user = await this.usersService.findOneUser(id);
    return user;
  }

  @Post()
  async create(@Body() userDTO: CreateUserDto) {
    const userCreated = await this.usersService.createUser(userDTO);
    return userCreated;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDTO: UpdateUserDto) {
    const updatedUser = await this.usersService.updateUser(id, userDTO);
    return updatedUser;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.usersService.deleteUser(id);
    return;
  }
}
