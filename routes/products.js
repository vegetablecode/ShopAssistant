const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const ProductsController = require("../controllers/products");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router
  .route("/:id")
  // @route   GET api/products:id
  // @desc    Get All Products from list
  // @access  Private
  .get(auth, asyncMiddleware(ProductsController.getProducts));

router
  .route("/:item_id/:product_id")
  // @route   GET api/products:id
  // @desc    Get All Products from list
  // @access  Private
  .delete(auth, asyncMiddleware(ProductsController.deleteProduct));

module.exports = router;
