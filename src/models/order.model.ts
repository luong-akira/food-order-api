module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      total: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
    },
    {
      underscored: true,
    },
  );

  Order.associate = (db) => {
    db.Order.belongsTo(db.User);
    db.Order.belongsTo(db.Address);
    db.Order.belongsToMany(db.Food, { through: db.OrderDetails });
  };

  return Order;
};
