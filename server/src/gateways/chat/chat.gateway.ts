import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'net';

@WebSocketGateway({cors: true})
export class ChatGateway {
  // constructor(private readonly chatService: ChatService) {}   
  @WebSocketServer()
  server: Server;

  handleConnection(client: any, payload: any)
  {
    console.log(client.id);
  }
 
  @SubscribeMessage('message')
  handleEvent(@MessageBody('data') data: string, client: any): string 
  {
    console.log(data);
    return data;
  }
}
