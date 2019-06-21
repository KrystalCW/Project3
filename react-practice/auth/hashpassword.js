const bcrypt = require("bcryptjs");

const saltRounds = 12;

module.exports = (plainTextPassword, cb) => {
  bcrypt.hash(plainTextPassword, saltRounds, cb);
};