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
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { Role } from 'src/common/enums/roles/role.enum';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Roles(Role.Admin)
  @Get()
  async findAll() {
    const stores = await this.storeService.findAll();
    return stores;
  }

  @Roles(Role.Admin)
  @Get(':name')
  async findOne(@Param('name') name: string) {
    const store = await this.storeService.findOne(name);
    return store;
  }

  @Roles(Role.Admin)
  @Post()
  async create(@Body() createStoreDto: CreateStoreDto) {
    const storeCreated = await this.storeService.create(createStoreDto);
    return storeCreated;
  }

  @Roles(Role.Admin)
  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() updateStoreDto: UpdateStoreDto,
  ) {
    const updatedStore = await this.storeService.update(name, updateStoreDto);
    return updatedStore;
  }

  @Roles(Role.Admin)
  @Delete(':name')
  async remove(@Param('name') name: string) {
    await this.storeService.remove(name);
    return;
  }
}
