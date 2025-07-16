import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(1)
  @IsString()
  @ApiProperty({ example: 'Study' })
  title: string;

  @IsBoolean()
  @ApiProperty({ example: false })
  done: boolean;
}
