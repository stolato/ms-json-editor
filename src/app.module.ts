import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './modules/items/items.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsGateway } from './sockets/items.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ItemsGateway],
})
export class AppModule {}
