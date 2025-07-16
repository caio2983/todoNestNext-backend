import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Study' })
  title: string;

  @ApiProperty({ example: false })
  done: boolean;
}
