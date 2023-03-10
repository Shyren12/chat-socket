import { Module } from '@nestjs/common';
import {ChatGateway} from '../../gateways/chat/chat.gateway';

@Module({
    imports: [],
    providers: [ChatGateway],
})
export class GatewayModule {}
