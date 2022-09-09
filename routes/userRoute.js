const express = require("express");
const app = express.Router();
const User = require("../models/userModel");

app.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (result) {
      res.send(result);
    } else {
      res.status(400).json("Login failed");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});
app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const createdUser = await newUser.save();

    if (createdUser) {
      res.send("Registration Successfull");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);

    const user = await User.findOne({ _id: req.body._id });

    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = app;
