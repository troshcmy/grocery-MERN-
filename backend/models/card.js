const mongoose = require("../db");

const cartschema = new mongoose.Schema({
  customerName: { type: String, required: true },
  products: [{ type: String, required: true }],
  createdAt: { type: String, default: Date.now },
});

const Carts = mongoose.model("Carts", cartschema);

module.exports = Carts;
