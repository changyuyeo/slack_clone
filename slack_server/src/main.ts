import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Slack API Swagger Document')
    .setDescription('Slack 클론코딩 개발을 위한 API 문서')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log(`start to server: http://localhost:${PORT || 3000}/`);
  await app.listen(PORT || 3000);
}
bootstrap();
