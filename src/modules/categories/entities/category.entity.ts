import { Promotions } from 'src/modules/promotions/entities/promotions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categories' })
export class Categories {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'keyword', nullable: false, unique: true })
  keyword: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @ManyToMany(() => Promotions, (promotion) => promotion.categories)
  promotions: Promotions[];
}
