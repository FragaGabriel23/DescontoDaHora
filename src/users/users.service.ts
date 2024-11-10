import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async findOneUser(id: number): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async createUser(userDTO: UsersDto): Promise<Users> {
    const user = this.usersRepository.create(userDTO);
    return this.usersRepository.save(user);
  }

  async updateUser(id: number, userDTO: UsersDto): Promise<Users> {
    const user = await this.findOneUser(id);
    const updatedUser = Object.assign(user, userDTO);
    return this.usersRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOneUser(id);
    await this.usersRepository.remove(user);
  }
}
