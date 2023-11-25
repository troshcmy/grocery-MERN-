const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");
const authMiddleware = require("../middleware/authMiddleware");
const Carts = require("../models/card"); // Update import

router.get("/", authMiddleware, cardController.getcarts);
router.post("/", authMiddleware, cardController.createCarts);
router.put("/:id", authMiddleware, cardController.updateCarts);
router.get("/:id", authMiddleware, cardController.findByCartsId);

router.delete("/:id", authMiddleware, cardController.deleteCarts);

module.exports = router;
