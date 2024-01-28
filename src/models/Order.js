"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };
      // eslint-disable-next-line no-restricted-syntax
      for (const a of PROTECTED_ATTRIBUTES) {
        delete attributes[a];
      }
      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Pharmacy, {
        foreignKey: "pharmacy_id",
      });
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Order.belongsTo(models.Transaction, {
        foreignKey: "transaction_id",
      });
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: DataTypes.UUID,
      pharmacy_id: DataTypes.UUID,
      transaction_id: DataTypes.UUID,
      quantity: DataTypes.DECIMAL,
      status: {
        type: DataTypes.ENUM('delivered', 'ongoing', 'terminated'),
        defaultValue: 'ongoing'
      }
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
