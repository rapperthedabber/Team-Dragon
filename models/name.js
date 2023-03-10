const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class name extends Model {}

name.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    friends_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'name',
  }
);

module.exports = name;
