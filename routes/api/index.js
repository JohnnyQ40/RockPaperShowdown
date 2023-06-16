const router = require('express').Router();
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');
// const chatRoutes = require('./chat-routes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
// router.use('/chats', chatRoutes);

module.exports = router;