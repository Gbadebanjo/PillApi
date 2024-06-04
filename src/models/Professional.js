"use strict";
const { Model } = require("sequelize");

const PROTECTED_ATTRIBUTES = [];

module.exports = (sequelize, DataTypes) => {
    class Professional extends Model {
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
      
        }
    }
    Professional.init(
        {
        professional_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        title: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        profession: DataTypes.ENUM(['Doctor', 'Dentist','Physiotherapist']),
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM(['verified', 'unverified']),
            defaultValue: 'unverified'
        },
        location: DataTypes.STRING,
        password: DataTypes.STRING,
        last_login_at: DataTypes.DATE,
        last_ip_address: DataTypes.STRING,
        specialization: DataTypes.STRING,
        years_of_experience: DataTypes.INTEGER,
        bio: DataTypes.TEXT,
        certification: DataTypes.TEXT,
        languages: DataTypes.STRING,
        availability: DataTypes.STRING,
        photo: DataTypes.STRING,
        },
        {
        sequelize,
        modelName: "Professional",
        }
    );
    return Professional;
    };