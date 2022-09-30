module.exports = function (sequelize, DataTypes) {
  const Food = sequelize.define(
    'Food',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Food.associate = (db) => {
    db.Food.belongsTo(db.User);
    db.Food.hasMany(db.FoodImage);
    db.Food.hasMany(db.Category);
    db.Food.belongsToMany(db.Order, { through: 'food_category' });
  };
  return Food;
};
