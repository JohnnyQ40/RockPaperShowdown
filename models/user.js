const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        email: {
            type: Datatypes.String,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        wins: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        losses: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        rockPicks: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        paperPicks: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        scissorPicks: {
            type: Datatypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user',
    }
);

module.exports = User;