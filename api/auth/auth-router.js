const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../users/users-model");

const { isValid } = require("../../utils/validation");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const credentials = req.body;
  try {
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hashed = bcrypt.hashSync(credentials.password, rounds);
      credentials.password = hashed;
      const newUser = await User.add(credentials);
      res.status(201).json({ newUser });
    } else {
      res.status(400).json("Please provide valid username and password");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

module.exports = router;
