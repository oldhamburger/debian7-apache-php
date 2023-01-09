const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
if (process.env.NODE_ENV === "development") require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", async (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  try {
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ email: "Email already exists" });
    }
    if (req.body.name === "" || req.body.password === "") {
      return r