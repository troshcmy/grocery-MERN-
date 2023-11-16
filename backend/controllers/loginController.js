const jwt = require('jsonwebtoken');
// controllers/employeesController.js
const Employees = require('../models/employees');

const secretKey = 'your_secret_key';
// Add Specific employees items
exports.getSpecificEmployees = async (req, res) => {
  try {
    // Replace with your user authentication logic
    const { username, password } = req.body;

    // Check username and password against your database or user data
    const employees = await Employees.find({ Username: username, Password: password });
    if (employees.length <= 0) {
      return res.status(401).json({ message: 'Username or password does not match!' });
    }
    if (employees) {
      // Create a token
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      res.json({ token, message: `Hello ${username}, good to see you!` });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.auth = async (req, res) => {
  res.status(201).json({ message: 'This is a protected route' });
};
