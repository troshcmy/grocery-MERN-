const mongoose = require('../db');

const cardSchema = new mongoose.Schema({
  customerName: { type: String, required: true,},
  products: [{ type: String, required: true,}],
  createdAt: { type: String, default: Date.now },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
