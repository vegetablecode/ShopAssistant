const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router
  .route("/")
  // @route   POST api/users
  // @desc    Register new user
  // @access  Public
  .post(AuthController.registerUser);

module.exports = router;
