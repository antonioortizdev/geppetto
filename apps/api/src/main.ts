import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

async function bootstrap() {
  const port = process.env.API_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`API app started on http://localhost:${port} 🚀`);
}
bootstrap();
