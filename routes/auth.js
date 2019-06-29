const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const AuthController = require("../controllers/auth");

router
  .route("/")
  // @route   POST api/auth
  // @desc    Auth user
  // @access  Public
  .post(AuthController.authUser);

router
  .route("/user")
  // @route   GET api/auth/user
  // @desc    Get user data (by token)
  // @access  Private
  .get(auth, AuthController.getUserData);

module.exports = router;
