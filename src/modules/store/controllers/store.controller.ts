import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { StoreService } from '../services/store.service';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll() {
    const stores = await this.storeService.findAll();
    return stores;
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    const store = await this.storeService.findOne(name);
    return store;
  }

  @Post()
  async create(@Body() createStoreDto: CreateStoreDto) {
    const storeCreated = await this.storeService.create(createStoreDto);
    return storeCreated;
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateStoreDto: UpdateStoreDto,
  ) {
    const updatedStore = await this.storeService.update(name, updateStoreDto);
    return updatedStore;
  }

  @Delete(':name')
  async remove(@Param('name') name: string) {
    await this.storeService.remove(name);
    return;
  }
}
