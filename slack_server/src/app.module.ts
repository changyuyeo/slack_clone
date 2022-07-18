import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { ChannelsModule } from '@channels/channels.module';
import { DmsModule } from '@dms/dms.module';
import { LoggerMiddleware } from '@middlewares/logger.middleware';
import { UsersModule } from '@users/users.module';
import { WorkspacesModule } from '@workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ChannelsModule,
    DmsModule,
    UsersModule,
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
