import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { Response } from 'express';
import { UsersDto } from '../dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(@Res() response: Response) {
    const users = await this.usersService.findAllUsers();
    return response.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async findUserById(@Param('id') id: number, @Res() response: Response) {
    const user = await this.usersService.findOneUser(id);
    return response.status(HttpStatus.OK).json(user);
  }

  @Post()
  async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
    const userCreated = await this.usersService.createUser(userDTO);
    return response.status(HttpStatus.CREATED).json(userCreated);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Res() response: Response,
    @Body() userDTO: UsersDto,
  ) {
    const updatedUser = await this.usersService.updateUser(id, userDTO);
    return response.status(HttpStatus.OK).json(updatedUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number, @Res() response: Response) {
    await this.usersService.deleteUser(id);
    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
