const Carts = require("../models/card"); // Update import

exports.getcarts = async (req, res) => {
  try {
    const carts = await Carts.find({}); // Update model name
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findByCartsId = async (req, res) => {
  try {
    const carts = await Carts.findById(req.params.id); // Update model name

    if (!carts) {
      return res.status(404).json({ message: "Carts not found" }); // Update response message
    }

    res.json({ carts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCarts = async (req, res) => {
  console.log("Request Body:", req.body);
  const carts = new Carts(req.body); // Update model name
  try {
    const newCarts = await carts.save();
    res
      .status(201)
      .json({ message: "Carts created successfully", carts: newCarts }); // Update response message
  } catch (error) {
    res.status(400).json({ message: "Invalid data provided" });
  }
};

exports.updateCarts = async (req, res) => {
  try {
    const updatedCarts = await Carts.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCarts) {
      return res.status(404).json({ message: "Carts not found" }); // Update response message
    }

    res.json({ message: "Carts updated successfully", carts: updatedCarts }); // Update response message
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCarts = async (req, res) => {
  try {
    const deletedCarts = await Carts.findByIdAndDelete(req.params.id);

    if (!deletedCarts) {
      return res.status(404).json({ error: "Carts not found" }); // Update response message
    }

    res.status(200).json({ message: "Carts deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};
