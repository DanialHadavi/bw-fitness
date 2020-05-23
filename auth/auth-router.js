const express = require("express");
const users = require("../users/users-model");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secrets = require("./secret");

const bcrypt = require("bcryptjs");
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  users
    .add(user)
    .then((user) => {
      const token = genToken(user);

      res.status(201).json({
        id: user.id,
        instructor: user.instructor ? true : false,
        token,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "internal error adding user", err });
    });
});

router.post("/login", (req, res) => {
  const { password, username } = req.body;
  if (username && password) {
    users
      .findByUser(username)
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = genToken(user);
          res.status(200).json({
            id: user.id,
            instructor: user.instructor ? true : false,
            token: token,
          });
        } else {
          res.status(401).json({ message: "invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "internal error logging in", err });
      });
  } else {
    res.status(400).json({ message: "username and password required" });
  }
});

function genToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    instructor: user.instructor,
  };
  const options = { expiresIn: "1d" };
  const token = jwt.sign(payload, secrets.jwtSecret, options);
  return token;
}

module.exports = router;

module.exports = router;
