import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ChannelsModule } from '@channels/channels.module';
import { LoggerMiddleware } from '@common/middlewares/logger.middleware';
import { DmsModule } from '@dms/dms.module';
import { UsersModule } from '@users/users.module';
import { WorkspacesModule } from '@workspaces/workspaces.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
