module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define(
    'Review',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Review.associate = (db) => {
    db.Review.belongsTo(db.Food);
    db.Review.belongsTo(db.User);
  };
  return Review;
};
