const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../config/connection');

class Description extends Model {}

Description.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'description',
  }
);

module.exports = Description;
