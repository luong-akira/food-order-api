module.exports = function (sequelize, DataTypes) {
  const FoodImage = sequelize.define(
    'FoodImage',
    {
      desc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  FoodImage.associate = (db) => {
    db.FoodImage.belongsTo(db.Food);
  };
  return FoodImage;
};
