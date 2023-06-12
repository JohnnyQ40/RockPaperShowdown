const User = require('./user');
const Game = require('./game');

User.hasMany(Game, {
    foreignKey: 'user1_id',
});

User.hasMany(Game, {
    foreignKey: 'user2_id',
});

Game.belongsTo(User, {
    foreignKey: 'user1_id',
});

Game.belongsTo(User, {
    foreignKey: 'user2_id',
});

module.exports = { User, Game };