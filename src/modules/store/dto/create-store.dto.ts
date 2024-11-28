import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateStoreDto {
  @IsInt()
  @ApiPropertyOptional()
  readonly id: number;

  @IsString()
  @Length(3, 40)
  @ApiProperty({ description: 'Store name, between 3 and 40 characters.' })
  readonly name: string;

  @IsString()
  @Length(3, 320)
  @ApiPropertyOptional({
    description: 'Detailed description of the store, up to 320 characters.',
  })
  readonly description?: string;

  @IsString()
  @Length(3, 160)
  @ApiProperty({
    description: 'Physical address of the store, between 3 and 160 characters.',
  })
  readonly address: string;

  @IsPhoneNumber('BR')
  @ApiPropertyOptional({
    description:
      'Store contact phone number, formatted as a valid Brazilian phone number.',
  })
  readonly phone?: number;

  @IsEmail()
  @ApiPropertyOptional({ description: 'Valid email address of the store.' })
  readonly email?: string;

  @IsUrl()
  @ApiPropertyOptional({
    description: 'Website URL of the store',
  })
  readonly website?: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Creation date in ISO format.' })
  readonly createdAt?: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Update date in ISO format.' })
  readonly updatedAt?: string;
}
