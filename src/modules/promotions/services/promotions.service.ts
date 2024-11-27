import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Promotions } from '../entities/promotions.entity';
import { CreatePromotionDto } from '../dto/create-promotion.dto';
import { UpdatePromotionDto } from '../dto/update-promotion.dto';

@Injectable()
export class PromotionsService {
  constructor(
    @Inject('PROMOTION_REPOSITORY')
    private readonly promotionRepository: Repository<Promotions>,
  ) {}

  async findAllPromotions(): Promise<Promotions[]> {
    return this.promotionRepository.find();
  }

  async findOnePromotion(id: number): Promise<Promotions> {
    const promotion = await this.promotionRepository.findOne({ where: { id } });
    if (!promotion) {
      throw new NotFoundException(`Promotion with id ${id} not found`);
    }
    return promotion;
  }

  async createPromotion(promotionDTO: CreatePromotionDto): Promise<Promotions> {
    const promotion = this.promotionRepository.create(promotionDTO);
    return this.promotionRepository.save(promotion);
  }

  async updatePromotion(
    id: number,
    promotionDTO: UpdatePromotionDto,
  ): Promise<Promotions> {
    const promotion = await this.findOnePromotion(id);
    const updatedPromotion = Object.assign(promotion, promotionDTO);
    return this.promotionRepository.save(updatedPromotion);
  }

  async deleteUser(id: number): Promise<void> {
    const promotion = await this.findOnePromotion(id);
    await this.promotionRepository.remove(promotion);
  }
}
