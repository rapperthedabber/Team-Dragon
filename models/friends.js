
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class friends extends Model {}

friends.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friends',
}
);

module.exports = friends;