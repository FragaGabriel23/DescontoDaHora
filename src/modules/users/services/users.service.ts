import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOneUserById(id: number): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async findOneUserByEmail(email: string): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with id ${email} not found`);
    }
    return user;
  }

  async createUser(userDTO: CreateUserDto): Promise<Users> {
    const user = this.usersRepository.create(userDTO);
    return this.usersRepository.save(user);
  }

  async updateUser(id: number, userDTO: UpdateUserDto): Promise<Users> {
    const user = await this.findOneUserById(id);
    const updatedUser = Object.assign(user, userDTO);
    return this.usersRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOneUserById(id);
    await this.usersRepository.remove(user);
  }
}
