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

@Controller('promotions')
export class PromotionsController {
  constructor(private readonly promotionsService: PromotionsService) {}

  @Get()
  async findAll() {
    const promotions = await this.promotionsService.findAllPromotions();
    return promotions;
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const promotion = await this.promotionsService.findOnePromotion(id);
    return promotion;
  }

  @Post()
  async create(@Body() userDTO: CreatePromotionDto) {
    const userCreated = await this.promotionsService.createPromotion(userDTO);
    return userCreated;
  }

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

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.promotionsService.deleteUser(id);
    return;
  }
}
