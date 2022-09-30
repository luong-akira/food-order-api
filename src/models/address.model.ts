module.exports = function (sequelize, DataTypes) {
  const Address = sequelize.define(
    'Address',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  Address.associate = (db) => {
    db.Address.belongsTo(db.User);
  };
  return Address;
};
