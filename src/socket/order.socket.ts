import { socketServer } from '@config/socket';

export default class OrderSocket {
  constructor() {}

  public static orderFood(payload: any) {
    socketServer.io.emit('order', payload);
  }
}
