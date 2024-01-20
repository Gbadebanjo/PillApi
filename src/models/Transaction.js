"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
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
      Transaction.belongsTo(models.Pharmacy, {
        foreignKey: "pharmacy_id",
      });
      Transaction.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Transaction.hasOne(models.Order, {
        foreignKey: "transaction_id"
      })
    }
  }
  Transaction.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: DataTypes.UUID,
      pharmacy_id: DataTypes.UUID,
      amount: DataTypes.DECIMAL,
      reference: DataTypes.STRING(50),
      status: {
        type: DataTypes.ENUM('success', 'pending', 'failed', 'abandoned'),
        defaultValue: 'pending'
      },
      gateway: DataTypes.ENUM('paystack', 'flutterwave'),
      response: DataTypes.JSON
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
