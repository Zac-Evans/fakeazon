"use strict";
const { Model, INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  users.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      shipping_address_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_address_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shipping_zip: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      card_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      card_expiration_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_security_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      card_address_1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_address_2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      card_zip: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "users",
    }
  );
  return users;
};
