const sequelize = require('../config/connection');
const friends = require('./friends');
const name = require('./name');
const user = require('./user');

// name belongs to friends
name.belongsTo(friends, {
    foreignKey: 'friends_id'
})

//user has many friends
user.hasMany(friends, {
    foreignKey: 'user_id'

})

module.exports = {
    friends,
    name,
    user
}