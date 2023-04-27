import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TaskModule } from './task/task.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
