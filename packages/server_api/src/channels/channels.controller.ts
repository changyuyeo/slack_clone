import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('worksapces/:workspace/channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  getAllChannels() {
    return 'getChannels';
  }

  @Get(':id')
  getSpecificChannel(@Param('workspace') workspace: string, @Param('id') id: string) {
    console.log(workspace, id);
    return this.channelsService.getChannel();
  }

  @Get(':id/members')
  getAllMembers(@Query() query: any, @Param() param: any) {
    console.log(query, param);
    return 'getChats';
  }

  @Post(':id/members')
  inviteMembers(@Body() body: any) {
    console.log(body);
    return 'postChat';
  }
}
