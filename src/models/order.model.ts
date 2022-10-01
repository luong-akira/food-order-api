module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define(
    'Order',
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

      isDelivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Order.associate = (db) => {
    db.Order.belongsTo(db.User);
    db.Order.belongsTo(db.Food);
    db.Order.belongsTo(db.Address);
  };
  return Order;
};
