"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
      User.belongsToMany(models.Pharmacy, {
        foreignKey: "user_id",
        through: models.UserPharmaRole,
      });
      User.belongsToMany(models.Role, {
        foreignKey: "user_id",
        through: models.UserPharmaRole,
      });
    }
  }
  User.init(
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
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
      password: DataTypes.STRING,
      last_login_at: DataTypes.DATE,
      last_ip_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
