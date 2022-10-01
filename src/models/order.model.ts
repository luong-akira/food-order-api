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
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Order.associate = (db) => {
    db.Order.belongsTo(db.User);
    db.Order.belongsToMany(db.Food, { through: 'food_order' });
  };
  return Order;
};
