import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/controllers/v1/user/user.controller';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user/user.service';
import { GatewayModule } from './gateway/gateway.module';

@Module(
{
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), GatewayModule],
    controllers: [UserController],
    providers: [UserService],
})

export class UserModule {}