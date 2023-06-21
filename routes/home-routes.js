const router = require("express").Router();
const { User } = require("../models")

router.get('/roomCreation', (req, res) => {
    res.render("roomCreation", { layout : 'roomCreation' });
});

router.get('/', (req, res) => {
    res.render("homePage", { layout : 'main' });
});

router.get('/gamePage', (req, res) => {
    res.render("gamePage", { layout : 'gamePage' });
});

 router.get('/main', (req, res) => {
    res.render("main"), { layout : 'roomCreation' };
});

router.get('/resultsPage', (req, res) => {
    res.render("resultsPage"), { layout : 'resultsPage' };
});

router.get('/room', (req, res) => {
    res.render("room"), { layout : 'room' };
});

router.get('/scorePage', (req, res) => {
    res.render("scorePage"), { layout : 'scorePage' };
});

router.get('/userPage', (req, res) => {
    res.render("userPage"), { layout : 'userPage' };
});

router.get('/userProfile', (req, res) => {
    res.render("userProfile"), { layout : 'userProfile' };
});

router.get('/gameChoice', (req, res) => {
    res.render("gameChoice"), { layout : 'gameChoice' };
});

router.get('/gameResults', (req, res) => {
    res.render("gameResults") , { layout : 'gameResults' };
});

router.get('/gameScores', (req, res) => {
    res.render("gameScores"), { layout : 'gameScores' };
});

router.get('/homePage', (req, res) => {
    res.render("homePage"), { layout : 'homePage' };
});

router.get('/join', (req, res) => {
    res.render("join"), { layout : 'join' };
});

router.post("/join", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ where: { username } })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(409).json({ error: "Username is taken. Try another one." });
        }
        User.create({ username, password })
          .then((newUser) => {
            res
              .status(201)
              .json({ message: "User registered!", user: newUser });
          })
          .catch((error) => {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal server error" });
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
      });
  });

router.get('/login', (req, res) => {
    res.render("login"), { layout : 'login' };
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
    const userData = await User.findOne({ where: { username } });
        if (!userData) {
          return res.status(401).json({ error: "Invalid username or password" });
        }
        const validPassword = userData.checkPassword(password);
        if (!validPassword) {
          return res.status(401).json({ error: "Invalid username or password" });
        }
        res.json({ message: "Login successful", user: userData });
      } catch(error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
  });

router.get('/messagePage', (req, res) => {
    res.render("messagePage"), { layout : 'messagePage' };
});

router.get('/roomCreation', (req, res) => {
    res.render("roomCreation"), { layout : 'roomCreation' };
});

router.get('/roomSelection', (req, res) => {
    res.render("roomSelection"), { layout : 'roomSelection' };
});

router.get('/user', (req, res) => {
    res.render("user"), { layout : 'user' };
});

router.get('/userSearch', (req, res) => {
    res.render("userSearch"), { layout : 'userSearch' };
});

router.get('/viewUser', (req, res) => {
    res.render("viewUser"), { layout : 'viewUser' };
});
module.exports = router;