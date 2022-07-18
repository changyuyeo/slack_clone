import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChannelsService } from './channels.service';

@ApiTags('channels')
@Controller('worksapces/:workspace/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  getAllChannels() {
    return 'getChannels';
  }

  @Get(':id')
  getSpecificChannel(@Param('workspace') workspace: string, @Param('id') id: string) {
    return this.channelsService.getChannel();
  }

  @Get(':id/members')
  getAllMembers(@Query() query: any, @Param() param: any) {
    return 'getChats';
  }

  @Post(':id/members')
  inviteMembers(@Body() body: any) {
    return 'postChat';
  }
}
