import { Promotions } from 'src/modules/promotions/entities/promotions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', nullable: false, unique: true })
  name: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'address', nullable: false })
  address: string;

  @Column({ name: 'phone' })
  phone: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'website' })
  website: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @OneToMany(() => Promotions, (promotions) => promotions.store)
  promotions: Promotions[];
}
