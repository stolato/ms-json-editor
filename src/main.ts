import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('/api');
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.use(bodyParser.json({ limit: '35mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.enableCors({ origin: '*' });
  await app.listen(process.env.PORT);
}
bootstrap();
