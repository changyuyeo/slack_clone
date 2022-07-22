import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Users } from '@entities/Users';
import { SignupRequestDto } from './dto/signup.request.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

  getUser() {
    return 'getUser';
  }

  async signUp({ email, nickname, password }: SignupRequestDto) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) throw new UnauthorizedException('이미 존재하는 이메일 입니다');

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUserData = { email, nickname, password: hashedPassword };
    await this.usersRepository.save(newUserData);

    return 'userData';
  }
}
