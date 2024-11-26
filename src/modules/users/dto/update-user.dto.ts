import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsString,
  Length,
  IsDateString,
} from 'class-validator';

export class UpdateUserDto {
  @IsInt()
  @ApiPropertyOptional()
  readonly id?: number;

  @IsString()
  @Length(3, 25)
  @ApiProperty({ description: 'User name, between 3 and 25 characters.' })
  readonly name?: string;

  @IsEmail()
  @ApiProperty({ description: 'Valid email address of the user.' })
  readonly email?: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Creation date in ISO format.' })
  readonly createdAt?: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Update date in ISO format.' })
  readonly updatedAt?: string;
}
