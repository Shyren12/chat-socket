import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { GatewayModule } from './modules/gateway/gateway.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://viptuan12062003:tuan12062003@projectitss.f1ess6r.mongodb.net/shop'), 
    UserModule, 
    GatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
