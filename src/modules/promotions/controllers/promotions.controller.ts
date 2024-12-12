import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PromotionsService } from '../services/promotions.service';
import { CreatePromotionDto } from '../dto/create-promotion.dto';
import { UpdatePromotionDto } from '../dto/update-promotion.dto';
import { Roles } from 'src/common/decorators/roles/roles.decorator';
import { Role } from 'src/common/enums/roles/role.enum';

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Roles(Role.Admin, Role.Guest, Role.Store, Role.User)
  @Get()
  async findAll() {
    const promotions = await this.promotionsService.findAllPromotions();
    return promotions;
  }

  @Roles(Role.Admin, Role.Guest, Role.Store, Role.User)
  @Get(':id')
  async findById(@Param('id') id: number) {
    const promotion = await this.promotionsService.findOnePromotion(id);
    return promotion;
  }

  @Roles(Role.Admin, Role.Store, Role.User)
  @Post()
  async create(@Body() userDTO: CreatePromotionDto) {
    const userCreated = await this.promotionsService.createPromotion(userDTO);
    return userCreated;
  }

  @Roles(Role.Admin, Role.Store, Role.User)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() promotionDTO: UpdatePromotionDto,
  ) {
    const updatedUser = await this.promotionsService.updatePromotion(
      id,
      promotionDTO,
    );
    return updatedUser;
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.promotionsService.deleteUser(id);
    return;
  }
}
