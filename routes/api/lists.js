const express = require('express');
const router = express.Router();
const auth = require("../../middleware/auth");

// List Model
const List = require('../../models/List');

// @route   GET api/lists
// @desc    Get All lists
// @access  Public
router.get('/', (req, res) => {
  List.find()
    .sort({ date: -1 })
    .then(lists => res.json(lists));
});

// @route   GET api/lists/:userEmail
// @desc    Get All user's lists
// @access  Private
router.get(`/:userEmail`, (req, res) => {
    List.find()
      .sort({ date: -1 })
      .then(lists => res.json(lists));
  });

// @route   POST api/lists
// @desc    Create A Post
// @access  Private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/lists:id
// @desc    Delete A List
// @access  Private
router.delete('/:id', auth, (req, res) => {
  List.findById(req.params.id)
    .then(list => list.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
