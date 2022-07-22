import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { HttpExceptionFilter } from '@common/exceptions/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const { ORIGIN, PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe()); //* class validation 설정
  app.enableCors({ origin: ORIGIN, credentials: true }); //* cors 설정

  console.log(`start to server: http://localhost:${PORT || 8000}/`);
  await app.listen(PORT || 8000);
}
bootstrap();
