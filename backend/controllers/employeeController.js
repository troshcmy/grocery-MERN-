const jwt = require('jsonwebtoken');
// controllers/employeesController.js
const Employees = require('../models/employees');

// Get all employees items
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an employees items by ID
exports.getEmployeesById = async (req, res) => {
  try {
    const employees = await Employees.findById(req.params.id);
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new employees item
exports.createEmployees = async (req, res) => {
  const newEmployees = new Employees(req.body);
  try {
    const Employees = await newEmployees.save();
    res.status(201).json(Employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a employees by ID
exports.updateEmployees = async (req, res) => {
  try {
    const updateEmployees = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateEmployees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a employees item by ID
exports.deleteEmployees = async (req, res) => {
  try {
    await Employees.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
