const db = require("../../data/dbConfig");

function getAll() {
  return db("users");
}

module.exports = {
  getAll,
};
