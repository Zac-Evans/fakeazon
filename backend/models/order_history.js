
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class order_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }

  order_history.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      inventory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "inventory",
          key: "id",
        },
        allowNull: false,
      },
      date_ordered: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      order_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shipped: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      modelName: "order_history",
    }
  );
  return order_history;

};

