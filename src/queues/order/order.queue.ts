import * as Bull from 'bull';

export const orderQueue = new Bull('order-queue');
const orderProcess = require('./order.processor');

export async function orderProcesses() {
  orderQueue.process('order', orderProcess);
}
