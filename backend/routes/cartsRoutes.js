const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/',authMiddleware, cardController.getCards);
router.post('/',authMiddleware, cardController.createCard);
router.put('/:id',authMiddleware, cardController.updateCard);
router.delete('/:id',authMiddleware, cardController.deleteCard);

module.exports = router;
