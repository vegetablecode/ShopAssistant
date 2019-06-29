const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const ItemsController = require("../controllers/items");

router
  .route("/")
  // @route   GET api/items
  // @desc    Get All Items
  // @access  Private
  .get(auth, ItemsController.getAllItems)
  // @route   POST api/items
  // @desc    Add New Item
  // @access  Private
  .post(auth, ItemsController.addANewItem);

router
  .route("/:id")
  // @route   DELETE api/items:id
  // @desc    Delete An Item
  // @access  Private
  .delete(auth, ItemsController.deleteItem);

module.exports = router;
