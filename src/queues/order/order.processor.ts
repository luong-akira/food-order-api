import OrderSocket from '../../socket/order.socket';

const db = require('@models');
const { sequelize, Sequelize, User, Order, Food, OrderDetails } = db.default;

module.exports = async function (job: any) {
  console.log(job);
  const { FoodId, OrderId, quantity, total } = job.data;

  await OrderDetails.create({
    FoodId,
    OrderId,
    quantity,
    total,
  });

  OrderSocket.orderFood('you have been order');
};
