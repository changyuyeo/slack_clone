import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';

async function bootstrap() {
  const { PORT } = process.env;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 3000);

  console.log(`start to server: http://localhost:${PORT || 3000}/`);
}
bootstrap();
