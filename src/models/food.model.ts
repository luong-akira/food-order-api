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

      totalRating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      numOfRating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      avgRating: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.totalRating / this.numOfRating;
        },
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      underscored: true,
    },
  );

  Food.associate = (db) => {
    db.Food.belongsTo(db.User, { onDelete: 'CASCADE', hooks: true });
    db.Food.hasMany(db.FoodImage, { onDelete: 'CASCADE', hooks: true });
    db.Food.belongsToMany(db.Category, { through: 'food_category' });
    db.Food.belongsToMany(db.Order, { through: db.OrderDetails });
    db.Food.hasMany(db.Review);
  };

  Food.afterSave((food) => {});
  return Food;
};
