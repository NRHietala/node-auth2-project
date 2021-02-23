const express = require("express");
const router = express().Router();

router.post("/register", (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

router.post("/login", (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

module.exports = router;
