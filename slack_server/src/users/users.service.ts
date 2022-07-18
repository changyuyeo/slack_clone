import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from './dtos/join.request.dto';

@Injectable()
export class UsersService {
  postUsers(userData: JoinRequestDto) {
    return userData;
  }
}
