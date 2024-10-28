import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UsersDto {
  @ApiPropertyOptional()
  readonly id?: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiPropertyOptional()
  readonly createdAt?: string;

  @ApiPropertyOptional()
  readonly updatedAt?: string;
}
