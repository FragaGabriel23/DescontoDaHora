import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'promotions' })
export class Promotions {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'endDate' })
  endDate: string;

  @Column({ name: 'startDate' })
  startDate: string;

  @Column({ name: 'image', nullable: false })
  image: string;

  @Column({ name: 'price', nullable: false })
  price: number;

  @Column({ name: 'previousPrice' })
  previousPrice: number;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'product', nullable: false })
  product: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
