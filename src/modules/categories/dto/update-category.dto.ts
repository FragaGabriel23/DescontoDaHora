import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, Length, IsDateString } from 'class-validator';

export class UpdateCategoryDto {
  @IsInt()
  @ApiPropertyOptional()
  readonly id?: number;

  @IsString()
  @Length(3, 25)
  @ApiProperty({
    description: 'Category keyword, between 3 and 25 characters.',
  })
  readonly keyword: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Creation date in ISO format.' })
  readonly createdAt?: string;

  @IsDateString()
  @ApiPropertyOptional({ description: 'Update date in ISO format.' })
  readonly updatedAt?: string;
}
