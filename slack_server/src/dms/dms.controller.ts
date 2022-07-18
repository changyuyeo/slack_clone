import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DmsService } from './dms.service';

@Controller('workspaces/:workspace/dms')
export class DmsController {
  constructor(private readonly dmsService: DmsService) {}

  @Get(':id/chats')
  getChat(@Param('workspace') workspace: string, @Param('id') id: string, @Query() query: any) {
    return this.dmsService.getChat();
  }

  @Post(':id/chats')
  postChat(@Param('id') id: string, @Body() body: any) {
    return this.dmsService.postChat();
  }
}
