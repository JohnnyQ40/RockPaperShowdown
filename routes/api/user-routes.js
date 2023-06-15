const router = require("express").Router();
const { User } = require("../../models");

// find by username or email?
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ where: { username } })
    .then((userData) => {
      if (!userData) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      if (password !== userData.password) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      res.json({ message: "Login successful", user: userData });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});
// by username or email?
router.post("/register", (req, res) => {
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
