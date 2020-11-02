"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  cart_items.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "inventory",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      shopping_cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "shopping_cart",
          key: "id",
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "cart_items",
    }
  );
  return cart_items;
};
