"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
  class otp extends Model {
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
        otp.belongsTo(models.User, {
            foreignKey: "user_id",
          });
    }
  }
  otp.init(
    {
      otp_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      otp: DataTypes.STRING,
      user_id: DataTypes.UUID
    },
    {
      sequelize,
      modelName: "otp",
    }
  );
  return otp;
};
