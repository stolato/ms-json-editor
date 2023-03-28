import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('/api');
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.enableCors({ origin: '*' });
  await app.listen(process.env.PORT);
}
bootstrap();
