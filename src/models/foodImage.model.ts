module.exports = function (sequelize, DataTypes) {
  const FoodImage = sequelize.define(
    'FoodImage',
    {
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
    db.FoodImage.belongsTo(db.Food, { onDelete: 'CASCADE', hooks: true });
  };

  FoodImage.afterDestroy((foodImage) => {
    console.log('Destroy');
  });
  return FoodImage;
};
