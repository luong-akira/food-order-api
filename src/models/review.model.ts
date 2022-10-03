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

  Review.afterCreate(async (review, options) => {
    const { transaction } = options;

    console.log(`after create`, review);

    console.log(review);

    await sequelize.models.Food.increment(
      { num_of_rating: 1, total_rating: review.dataValues.rating },
      {
        where: { id: review.FoodId },
        transaction,
      },
    );
  });

  Review.afterUpdate(async (review, options) => {
    const { transaction } = options;

    if (review._changed.rating) {
      console.log(`after update`, review);

      const food = await sequelize.models.Food.findOne({
        where: { id: review.FoodId },
        transaction,
      });

      console.log(food);

      await food.update({
        totalRating: food.dataValues.totalRating + review.dataValues.rating - review._previousDataValues.rating,
      });

      await food.save();
    }
  });

  Review.afterDestroy(async (review, options) => {
    const { transaction } = options;

    const food = await sequelize.models.Food.findOne({
      where: { id: review.FoodId },
      transaction,
    });

    await sequelize.models.Food.increment(
      { num_of_rating: -1, total_rating: -review.dataValues.rating },
      {
        where: { id: review.FoodId },
        transaction,
      },
    );
  });

  return Review;
};
