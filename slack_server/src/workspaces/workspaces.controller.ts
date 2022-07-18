import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {
    return 'getMyWorkspaces';
  }

  @Get(':id/members')
  getAllMemberFromWorkspace() {
    return 'getAllMemberFromWorkspace';
  }

  @Get(':id/members/:id')
  getMemberInfoInWorkspace() {
    return 'getMemberInfoInWorkspace';
  }

  @Post()
  createWorkspaces() {
    return 'createWorkspaces';
  }

  @Post(':id/members')
  inviteMemberToWorkspace() {
    return 'inviteMemberToWorkspace';
  }

  @Delete(':id/members/:id')
  kickMemberFromWorkspace() {
    return 'kickMemberFromWorkspace';
  }
}
