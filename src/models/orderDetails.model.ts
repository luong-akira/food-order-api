module.exports = function (sequelize, DataTypes) {
  const OrderDetails = sequelize.define(
    'OrderDetails',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      isDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      underscored: true,
    },
  );

  OrderDetails.afterUpdate(async (orderDetails, options) => {
    const { transaction } = options;

    console.log(orderDetails);

    if (orderDetails.isDelivered && orderDetails.isPaid) {
      await sequelize.models.Food.increment('sold', {
        where: { id: orderDetails.FoodId },
        transaction,
      });
    }
  });

  return OrderDetails;
};
