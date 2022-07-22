import { Users } from '@entities/Users';
import { PickType } from '@nestjs/mapped-types';

export class SignupRequestDto extends PickType(Users, ['email', 'nickname', 'password'] as const) {}
