const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  products: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
