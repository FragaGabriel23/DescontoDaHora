import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
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
