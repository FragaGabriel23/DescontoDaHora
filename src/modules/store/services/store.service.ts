import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';
import { Store } from '../entities/store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_REPOSITORY')
    private readonly storeRepository: Repository<Store>,
  ) {}

  async findAll() {
    return this.storeRepository.find();
  }

  async findOne(name: string) {
    const store = await this.storeRepository.findOne({ where: { name } });
    if (!store) {
      throw new NotFoundException(`Store with name ${name} not found`);
    }
    return store;
  }

  async create(createStoreDto: CreateStoreDto) {
    const store = this.storeRepository.create(createStoreDto);
    return this.storeRepository.save(store);
  }

  async update(name: string, updateStoreDto: UpdateStoreDto) {
    const store = await this.findOne(name);
    const updatedStore = Object.assign(store, updateStoreDto);
    return this.storeRepository.save(updatedStore);
  }

  async remove(name: string) {
    const store = await this.findOne(name);
    await this.storeRepository.remove(store);
  }
}
