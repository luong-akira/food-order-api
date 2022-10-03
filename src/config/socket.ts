import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

export class SocketServer {
  public io: Server;

  public start(httpServer: HttpServer) {
    this.io = new Server(httpServer);
  }
}

export const socketServer = new SocketServer();
