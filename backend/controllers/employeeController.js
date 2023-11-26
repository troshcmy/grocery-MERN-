// const jwt = require('jsonwebtoken');
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

// Get an employees item by ID
exports.getEmployeesById = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controllers/employeesController.js
exports.createEmployees = async (req, res) => {
  try {
    const { Empid, Username, Password } = req.body;

    // Check if required fields are missing
    if (!Empid || !Username || !Password) {
      return res.status(400).json({ error: 'Empid, username, and password are required.' });
    }

    const Employee = new Employees(req.body);
    await Employee.save();
    res.json(Employee);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};




// Update an employees item by ID

exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employees.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEmployees = async (req, res) => {
  try {
    const updatedEmployee = await Employees.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an employees item by ID
exports.deleteEmployees = async (req, res) => {
  try {
    const deletedEmployee = await Employees.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      // If no employee is found with the given ID
      return res.status(404).json({ error: 'Employee not found' });
    }

    // Success message
    res.status(200).json({ message: 'Employee deleted successfully'});
  } catch (err) {
    // Error message
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};

