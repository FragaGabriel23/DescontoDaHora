import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNumber,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePromotionDto {
  @IsInt()
  @ApiPropertyOptional()
  readonly id?: number;

  @IsString()
  @ApiPropertyOptional({
    description: 'End date of the promotion.',
  })
  readonly endDate?: string;

  @IsString()
  @ApiPropertyOptional({
    description: 'Start date of the promotion.',
  })
  readonly startDate?: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL of the image associated with the promotion.',
  })
  readonly image: string;

  @IsNumber()
  @ApiProperty({ description: 'Price of the product on promotion.' })
  readonly price: number;

  @IsNumber()
  @ApiPropertyOptional({ description: 'Previous price before the promotion.' })
  readonly previousPrice?: number;

  @IsString()
  @Length(3, 400)
  @ApiProperty({
    description:
      'Detailed description of the promotion, between 3 and 400 characters.',
  })
  readonly description: string;

  @IsString()
  @Length(3, 80)
  @ApiProperty({
    description:
      'Name of the product being promoted,between 3 and 80 characters.',
  })
  readonly product: string;

  @IsDateString()
  @ApiPropertyOptional({
    description: 'Creation date of the record, in ISO format.',
  })
  readonly createdAt?: string;

  @IsDateString()
  @ApiPropertyOptional({
    description: 'Last update date of the record, in ISO format.',
  })
  readonly updatedAt?: string;
}
