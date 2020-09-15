/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-lonely-if */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable import/newline-after-import */
const express = require("express");
const router = express();
const User = require("../models/user");
const { json } = require("express");

//create a user
router.post("/", async (req, res) => {
  const user = await User({
    forename: req.body.forename,
    surname: req.body.surname,
    translateFrom: req.body.translateFrom,
    translateTo: req.body.translateTo,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//log in
// eslint-disable-next-line prefer-arrow-callback
router.post("/login", function (req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "email and password do not match",
        });
      } else {
        if (user.validatePassword(req.body.password)) {
          res.status(200).json(user);
        } else {
          res.status(401).json({
            message: "the username/password is incorrect",
          });
        }
      }
    }).catch((err) => {
      console.log(err);
      res.status(500);
    });
});

module.exports = router;
