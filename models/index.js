const User = require('./user');
const Game = require('./game');
const { GameChat, UserChat } = require('./chat');


User.hasMany(Game, {
    foreignKey: 'user1_id',
});

User.hasMany(Game, {
    foreignKey: 'user2_id',
});

User.hasMany(UserChat)

Game.belongsTo(User, {
    foreignKey: 'user1_id',
});

Game.belongsTo(User, {
    foreignKey: 'user2_id',
});

GameChat.hasOne(Game, { 
    foreignKey: 'game_id'
});

GameChat.belongsTo(Game, {
    foreignKey: 'user1_id',
});

GameChat.belongsTo(User, {
    foreignKey: 'user2_id',
});

UserChat.belongsTo(User, {
    foreignKey: 'user1_id',
})

UserChat.belongsTo(User, {
    foreignKey: 'user2_id',
})


module.exports = { User, Game, GameChat, UserChat };