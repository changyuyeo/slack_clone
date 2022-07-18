import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'jebong@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'jebong',
    description: '닉네임',
    required: true,
  })
  public nicknae: string;

  @ApiProperty({
    example: '12345678',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
