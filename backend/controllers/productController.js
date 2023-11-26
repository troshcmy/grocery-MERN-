// controllers/productController.js
const Product = require('../models/products');


// GET method
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// GET method by ID

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.sendStatus(404);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// POST method

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// PUT method

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// PATCH method

exports.patchProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // Use $set to update only the specified fields
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({
      message: "Product patched successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

// DELETE method

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      // If no product is found with the given ID
      return res.status(404).json({ error: 'Product not found' });
    }

    // Success message
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    // Error message
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};
