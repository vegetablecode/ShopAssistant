const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const ItemsController = require("../controllers/items");
const asyncMiddleware = require("../middleware/asyncMiddleware")

router
  .route("/")
  // @route   GET api/items
  // @desc    Get All User Items
  // @access  Private
  .get(auth, asyncMiddleware(ItemsController.getAllItems))
  // @route   POST api/items
  // @desc    Add New User Item
  // @access  Private
  .post(auth, asyncMiddleware(ItemsController.addANewItem));

router
  .route("/:id")
  // @route   GET api/items:id
  // @desc    Get An Item
  // @access  Private
  .get(auth, asyncMiddleware(ItemsController.getItem))
  // @route   DELETE api/items:id
  // @desc    Delete An Item
  // @access  Private
  .delete(auth, asyncMiddleware(ItemsController.deleteItem));

module.exports = router;
