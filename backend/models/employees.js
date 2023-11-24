// models/employees.js
const mongoose = require('../db');


const employeeSchema = new mongoose.Schema({
  Empid: { type: Number, required: true,},
  Username: { type: String, required: true,},
  Password: { type: String, required: true },
});


const Employees = mongoose.model('Employee', employeeSchema);

module.exports = Employees;
