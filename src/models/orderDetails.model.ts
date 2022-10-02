module.exports = function (sequelize, DataTypes) {
    const OrderDetails = sequelize.define(
      'OrderDetails',
      { 
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },

        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },

        price:{
            type:DataTypes.FLOAT,
            allowNull:false
        },

        isDelivered:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
        
      },
      {
        underscored: true,
      },
    );
  

    return OrderDetails;
  };
  