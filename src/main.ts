import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 9090;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log('Listening on port', PORT);
}
bootstrap();
