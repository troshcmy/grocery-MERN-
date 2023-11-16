const mongoose = require("../db");

const productSchema = new mongoose.Schema({
  ProductCode: {
    type: Number,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductQuantity: {
    type: Number,
    required: true,
  },
  Product_price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
