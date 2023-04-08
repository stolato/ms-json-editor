import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';


@WebSocketGateway({ namespace: 'items', cors: { origin: '*'} })
export class ItemsGateway {
  private readonly logger = new Logger(ItemsGateway.name);
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage() {
    this.server.emit('message', {});
  }

  @SubscribeMessage('events')
  onEvent(client: Socket, data: any): WsResponse<any> {
    const room = data.room;
    const event = data.event || 'events';
    return this.server.to(room).emit(event, data.data);
  }

  @SubscribeMessage('join')
  handleJoinRoom(client: Socket, room: string){
    this.logger.debug(room);
    client.join(room);
  }
}
