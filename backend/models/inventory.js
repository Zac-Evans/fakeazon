"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  inventory.init(
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      rating_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      shortDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      longDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "inventory",
    }
  );
  return inventory;
};
