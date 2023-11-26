// controllers/orderController.js

// GET method
const Order = require('../models/orders');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};


// GET method by ID

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.sendStatus(404);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};


// POST method

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// // NEW CODE STARTS HERE

// exports.createOrder = async (req, res) => {
//   try {
//     const order = new Order(req.body);
    
//     // Set the 'lastupdated' field to the current date
//     order.lastupdated = new Date();
    
//     await order.save();

//     // Call triggerNotification function after saving the order
//     await triggerNotification(order);

//     res.json(order);
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// };

// // NEW CODE ENDS HERE

// PUT method

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, 
      {
      new: true,
    });
    res.json(updatedOrder);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};


// PATCH method

exports.patchOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // Use $set to update only the specified fields
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      message: "Order patched successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

// DELETE method
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      // If no order is found with the given ID
      return res.status(404).json({ error: 'Order not found' });
    }

    // Success message
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    // Error message
    console.log(err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};



