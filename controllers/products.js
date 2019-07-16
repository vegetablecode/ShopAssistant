const Item = require("../models/Item");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res) => {
    var allUserProducts = [];

    // get user
    const user = await User.findById(req.user.id);

    // get lists
    const userLists = user.lists;

    // get products
    for (i = 0; i < userLists.length; i++) {
      const products = await Product.find({ item: userLists[i] });
      allUserProducts = allUserProducts.concat(products);
    }
    return res.status(200).json(allUserProducts);
  },
  getProducts: async (req, res) => {
    // get list
    const item = await Item.findById(req.params.id).populate("products");

    // get products
    const products = item.products;

    return res.status(200).json(products);
  },
  deleteProduct: async (req, res) => {
    // Get list
    var item = await Item.findById(req.params.item_id);
    if (!item) return res.status(404).json({ success: false });

    // Check if it's user's list
    if (req.user.id != item.user)
      return res.status(401).json({ success: false });

    // Get product
    const product = await Product.findById(req.params.product_id);
    if (!product) return res.status(404).json({ success: false });

    // Delete product from list (Items)
    item.products.pop(product._id);
    item.save();

    // Delete product from database
    await product.remove();

    return res.json({ success: true });
  }
};
