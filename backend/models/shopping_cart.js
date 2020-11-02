"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  shopping_cart.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
          },
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
      }, 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "shopping_cart",
    }
  );
  return shopping_cart;
};
