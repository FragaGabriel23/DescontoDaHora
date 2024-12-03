import { Categories } from 'src/modules/categories/entities/category.entity';
import { Store } from 'src/modules/store/entities/store.entity';
import { Users } from 'src/modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => Users, (user) => user.promotions, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  user: Users;

  @ManyToMany(() => Categories, (category) => category.promotions, {
    cascade: true,
  })
  categories: Categories[];

  @ManyToOne(() => Store, (store) => store.promotions, {
    eager: true,
    cascade: true,
  })
  store: Store;
}
