"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class UserPharmaRole extends Model {
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
      UserPharmaRole.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      UserPharmaRole.belongsTo(models.Pharmacy, {
        foreignKey: 'pharmacy_id',
      });
      UserPharmaRole.belongsTo(models.Role, {
        foreignKey: 'role_id',
      });
    }
  }
  UserPharmaRole.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      pharmacy_id: DataTypes.UUID,
      role_id: DataTypes.UUID,
      user_id: DataTypes.UUID
    },
    {
      sequelize,
      modelName: "UserPharmaRole",
    }
  );
  return UserPharmaRole;
};
