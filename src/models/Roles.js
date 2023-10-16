"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
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
      Role.belongsToMany(models.Pharmacy, {
        foreignKey: "role_id",
        through: models.UserPharmaRole,
      });
      Role.belongsToMany(models.User, {
        foreignKey: "role_id",
        through: models.UserPharmaRole,
      });
    }
  }
  Role.init(
    {
      role_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
