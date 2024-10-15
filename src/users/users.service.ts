import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async createUser(userDTO: UsersDto): Promise<UsersDto> {
    const createUser = await this.usersRepository.save(userDTO);
    return createUser;
  }
}
