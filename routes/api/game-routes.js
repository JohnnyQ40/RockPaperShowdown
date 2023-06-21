const router = require('express').Router();
const { Game, User } = require('../../models');
//-- unsure if User is necessary since users are present in games model


//-- This is used for game room display page
router.get('/', (req, res) => {
 Game.findAll({
    include: [{ model: User}] 
 }).then((gameData) => {
    res.json(gameData)
 })
});

//-- This is used for game room specific search
router.get('/:id', (req, res) => {
    Game.findByPk(req.params.id, {
        include: [{ model: User}]
    }).then((gameData) => {
        res.json(gameData)
    })
    })

//-- This is used to create a new game room. 
//-- Also used when creating a room when users 'challenge' eachother via their profile pages
router.post('/', (req, res) => {
    Game.create(req.body)
    .then((newGame) => {
        res.json(newGame);
    })
    .catch((err) => {
        res.json(err)
    })
})

//-- This is used to delete/close/finish a game room

router.delete('/:id', (req, res) => {
    Game.destroy(req.body, {
      where: {
        id: req.params.id,
      }
    })
    .then((delGame) => {
      res.json(delGame);
    })
    .catch((err) => {
      res.json(err)
    })
  });
  
module.exports =  router ;