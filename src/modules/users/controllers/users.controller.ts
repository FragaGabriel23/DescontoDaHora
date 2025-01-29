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
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { Role } from 'src/common/enums/roles/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.Admin)
  @Get()
  async findAll() {
    const users = await this.usersService.findAllUsers();
    return users;
  }

  @Roles(Role.Admin)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const user = await this.usersService.findOneUserById(id);
    return user;
  }

  @Roles(Role.Admin)
  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    const user = await this.usersService.findOneUserByEmail(email);
    return user;
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() userDTO: CreateUserDto) {
    const userCreated = await this.usersService.createUser(userDTO);
    return userCreated;
  }

  @Roles(Role.Admin)
  @Put(':id')
  async update(@Param('id') id: number, @Body() userDTO: UpdateUserDto) {
    const updatedUser = await this.usersService.updateUser(id, userDTO);
    return updatedUser;
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.usersService.deleteUser(id);
    return;
  }
}
