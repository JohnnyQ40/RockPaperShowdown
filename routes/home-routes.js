const router = require("express").Router();

router.get('/roomCreation', (req, res) => {
    res.render("roomCreation");
});

router.get('/', (req, res) => {
    res.render("homePage");
});

router.get('/gamePage', (req, res) => {
    res.render("layouts/gamePage");
});

router.get('/main', (req, res) => {
    res.render("layouts/main");
});

router.get('/resultsPage', (req, res) => {
    res.render("layouts/resultsPage");
});

router.get('/room', (req, res) => {
    res.render("layouts/room");
});

router.get('/scorePage', (req, res) => {
    res.render("layouts/scorePage");
});

router.get('/userPage', (req, res) => {
    res.render("layouts/userPage");
});

router.get('/userProfile', (req, res) => {
    res.render("layouts/userProfile");
});

router.get('/gameChoice', (req, res) => {
    res.render("gameChoice");
});

router.get('/gameResults', (req, res) => {
    res.render("gameResults");
});

router.get('/gameScores', (req, res) => {
    res.render("gameScores");
});

 router.get('/homePage', (req, res) => {
     res.render("homePage");
 });

router.get('/join', (req, res) => {
    res.render("join");
});

router.get('/login', (req, res) => {
    res.render("login");
});

router.get('/messagePage', (req, res) => {
    res.render("messagePage");
});

router.get('/roomCreation', (req, res) => {
    res.render("roomCreation");
});

router.get('/roomSelection', (req, res) => {
    res.render("roomSelection");
});

router.get('/user', (req, res) => {
    res.render("user");
});

router.get('/userSearch', (req, res) => {
    res.render("userSearch");
});

router.get('/viewUser', (req, res) => {
    res.render("viewUser");
});
module.exports = router;