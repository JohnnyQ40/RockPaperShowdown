const router = require("express").Router();
const { User } = require("../../models");

router.get('/:username', async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ where: { name: username } });

    if (user) {
      const userStats = user.get({ plain: true});

      res.render('user', { user: userStats});
    } else {
      res.status(404).render('404')
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// find by username or email?
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//   const userData = await User.findOne({ where: { username } });
//       if (!userData) {
//         return res.status(401).json({ error: "Invalid username or password" });
//       }
//       const validPassword = userData.checkPassword(password);
//       if (!validPassword) {
//         return res.status(401).json({ error: "Invalid username or password" });
//       }
//       res.json({ message: "Login successful", user: userData });
//     } catch(error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
// });

// by username or email?
// router.post("/join", (req, res) => {
//   const { username, password } = req.body;
//   User.findOne({ where: { username } })
//     .then((existingUser) => {
//       if (existingUser) {
//         return res.status(409).json({ error: "Username is taken. Try another one." });
//       }
//       User.create({ username, password })
//         .then((newUser) => {
//           res
//             .status(201)
//             .json({ message: "User registered!", user: newUser });
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           res.status(500).json({ error: "Internal server error" });
//         });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Internal server error" });
//     });
// });

// router.get("/join", (req, res) => {
//   res.render("join");
// });

// router.get("/login", (req, res) => {
//   res.render("login");
// });

module.exports =  router ;
