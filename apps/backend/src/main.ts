import { NestFactory } from '@nestjs/core';
import createDebug from 'debug';
import { AppModule } from './app.module';

const errorLog = createDebug('backend:error');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
}
bootstrap().catch((err: Error) => errorLog(`Error: ${err.message}`));
