const Item = require("../models/Item");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports = {
  getAllItems: async (req, res) => {
    // const user = await User.findById(req.user.id).populate({
    //   path: "lists",
    //   populate: {
    //     path: "products"
    //   }
    // });
    const user = await User.findById(req.user.id).populate("lists");
    const items = user.lists;
    return res.status(200).json(items);
  },
  addANewItem: async (req, res) => {
    const newItem = new Item(req.body);

    // Get user
    const user = await User.findById(req.user.id);

    // Assign user to list & list to user
    newItem.user = user._id;
    user.lists.push(newItem);

    // save list and user
    await newItem.save();
    await user.save();

    return res.json(newItem);
  },
  deleteItem: async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false });

    // check if the item belongs to user
    if (req.user.id != item.user)
      return res.status(401).json({ success: false });

    await item.remove();
    return res.json({ success: true });
  },
  getItem: async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Cannot find the item!" });

    // check if the item belongs to user
    if (req.user.id != item.user)
      return res
        .status(401)
        .json({ msg: "You are not authorized to see this item!" });

    return res.json(item);
  },
  addProduct: async (req, res) => {
    // get list (Item) by id
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: "Cannot find the item!" });

    // create product
    var product = new Product(req.body);

    // assign list to product & save product
    product.item = item._id;
    await product.save();

    // assign product to list & save list
    item.products.push(product);
    await item.save();

    return res.json(product);
  }
};
