import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://elian:eli123@cluster0.nkihrbe.mongodb.net/nestjs-products-api',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
