const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        ties: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        rockPicks: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        paperPicks: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        scissorPicks: {
            type: DataTypes.INTEGER,
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