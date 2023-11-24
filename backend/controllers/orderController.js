// controllers/orderController.js
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

// DELETE remove an order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

