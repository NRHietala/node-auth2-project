const express = require("express");
const router = express.Router();

const User = require("./users-model");

// restricted middleware

router.get("/", (_, res) => {});
