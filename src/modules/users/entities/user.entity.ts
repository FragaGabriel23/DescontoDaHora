import { Role } from 'src/common/enums/roles/role.enum';
import { Promotions } from 'src/modules/promotions/entities/promotions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'uid', nullable: true })
  uid: string;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @OneToMany(() => Promotions, (promotion) => promotion.user)
  promotions: Promotions[];

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
    name: 'roles',
    nullable: false,
  })
  roles: Role;
}
