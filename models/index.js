// const sequelize = require('../config/connection');
const Description = require('./Description');
//const friends = require('./Description');
const name = require('./name');
const user = require('./user');

// name belongs to friends
user.belongsTo(Description, {
  foreignKey: 'user_id',
});

// user has many friends
user.hasOne(name, {
  foreignKey: 'user_id',
});

module.exports = {
  Description,
  name,
  user,
};
