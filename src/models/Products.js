"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
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
      Product.belongsTo(models.Pharmacy, {
        foreignKey: "pharmacy_id",
      });
    }
  }
  Product.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      image: DataTypes.TEXT,
      pharmacy_id: DataTypes.UUID,
      description: {
        type: DataTypes.TEXT,
      },
      
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
