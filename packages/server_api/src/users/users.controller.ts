import { UserDto } from '@common/dto/user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: UserDto, description: 'success' })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers() {
    return 'getUsers';
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    return this.usersService.postUsers(body);
  }

  @ApiOkResponse({ type: UserDto, description: 'success' })
  @ApiOperation({ summary: '로그인' })
  @Post('/login')
  login() {
    return 'login';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('/logout')
  logout() {
    return 'logout';
  }
}
