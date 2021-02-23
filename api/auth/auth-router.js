const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express().Router();

router.post("/register", async (req, res, next) => {
  const credentials = req.body;
  try {
    if (credentials) {
      // add in validation
      const rounds = process.env.BCRYPT_ROUNDS || 8;
      const hashed = bcrypt.hashSync(credentials.password, rounds);
      credentials.password = hashed;
      //database action
    }
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

router.post("/login", async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

module.exports = router;
