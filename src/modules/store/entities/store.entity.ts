import {
  Column,
  CreateDateColumn,
  Entity,
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
}
