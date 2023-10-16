"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class Pharmacy extends Model {
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
      Pharmacy.belongsToMany(models.User, {
        foreignKey: "pharmacy_id",
        through: models.UserPharmaRole,
      });
      Pharmacy.belongsToMany(models.Role, {
        foreignKey: "role_id",
        through: models.UserPharmaRole,
      });
    }
  }
  Pharmacy.init(
    {
      pharmacy_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      status: {
        type: DataTypes.ENUM(['verified', 'unverified']),
        defaultValue: 'unverified'
      },
      location: DataTypes.STRING,
      last_login_at: DataTypes.DATE,
      last_ip_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pharmacy",
    }
  );
  return Pharmacy;
};
