const jwt = require('jsonwebtoken');
const Employees = require('../models/employees');

const secretKey = 'your_secret_key';

exports.getSpecificEmployees = async (req, res) => {
  try {
    const { username, password } = req.body;

    const employees = await Employees.find({ Username: username, Password: password });
    if (employees.length <= 0) {
      return res.status(401).json({ message: 'Username or password does not match!' });
    }

    if (employees) {
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

exports.logout = async (req, res) => {
  try {
    // Assuming req.user contains information about the authenticated user
    // You can implement token invalidation logic here (e.g., update a user's token in the database)

    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
