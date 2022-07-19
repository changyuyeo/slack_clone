import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);

  console.log(`start to server: http://localhost:${PORT || 3000}/`);
  await app.listen(PORT || 3000);
}
bootstrap();
