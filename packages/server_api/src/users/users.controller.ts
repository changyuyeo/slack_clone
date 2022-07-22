import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from '@common/decorators/user.decorator';
import { SignupRequestDto } from './dto/signup.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@User() user: any) {
    console.log(user);
    return 'getUsers';
  }

  @Post('/signup')
  signUp(@Body() body: SignupRequestDto) {
    return this.usersService.signUp(body);
  }

  @Post('/login')
  login() {
    return 'login';
  }

  @Post('/logout')
  logout() {
    return 'logout';
  }
}
