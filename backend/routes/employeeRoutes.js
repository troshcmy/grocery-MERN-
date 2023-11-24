const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, employeeController.getAllEmployees);
router.get("/:id", authMiddleware, employeeController.getEmployeesById);
router.post("/", authMiddleware, employeeController.createEmployees);
router.put('/:id',authMiddleware, employeeController.updateEmployees);
router.delete("/:id", authMiddleware, employeeController.deleteEmployees);

module.exports = router;
