const express = require("express");
const router = express.Router();

const User = require("./users-model");

// restricted middleware

router.get("/", async (_, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Server Error");
  }
});

module.exports = router;
