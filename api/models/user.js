/* eslint-disable quotes */
/* eslint-disable import/newline-after-import */
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  forename: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  translateFrom: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  translateTo: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    set: (password) => bcrypt.hashSync(password, 10),
  },
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
