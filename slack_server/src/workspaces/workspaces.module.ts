import { Module } from '@nestjs/common';

import { WorkspacesService } from '@workspaces/workspaces.service';
import { WorkspacesController } from '@workspaces/workspaces.controller';

@Module({
  providers: [WorkspacesService],
  controllers: [WorkspacesController],
})
export class WorkspacesModule {}
