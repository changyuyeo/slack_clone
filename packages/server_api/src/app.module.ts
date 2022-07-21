import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChannelsModule } from '@channels/channels.module';
import { LoggerMiddleware } from '@common/middlewares/logger.middleware';
import { DmsModule } from '@dms/dms.module';
import { ChannelChats } from '@entities/ChannelChats';
import { ChannelMembers } from '@entities/ChannelMembers';
import { Channels } from '@entities/Channels';
import { Dms } from '@entities/Dms';
import { Mentions } from '@entities/Mentions';
import { Users } from '@entities/Users';
import { Workspacemembers } from '@entities/Workspacemembers';
import { Workspaces } from '@entities/Workspaces';
import { UsersModule } from '@users/users.module';
import { WorkspacesModule } from '@workspaces/workspaces.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [
            ChannelChats,
            ChannelMembers,
            Channels,
            Dms,
            Mentions,
            Users,
            Workspacemembers,
            Workspaces,
          ],
          migrations: [__dirname + '/src/migrations/*.ts'],
          cli: { migrationsDir: 'src/migrations' },
          autoLoadEntities: true,
          charset: 'utf8mb4',
          synchronize: false,
          logging: true,
          keepConnectionAlive: true,
        };
      },
    }),
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
