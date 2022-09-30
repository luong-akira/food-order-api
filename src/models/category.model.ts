module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define(
    'Category',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Category.associate = (db) => {
    db.Category.belongsTo(db.Food);
  };
  return Category;
};
