module.exports = function (sequelize, DataTypes) {
  const Address = sequelize.define(
    'Address',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

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
    db.Address.hasMany(db.Order);
  };
  return Address;
};
