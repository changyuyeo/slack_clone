import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from '@common/decorators/user.decorator';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@User() user: any) {
    console.log(user);
    return 'getUsers';
  }

  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    return this.usersService.postUsers(body);
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
