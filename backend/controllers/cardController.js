const Card = require('../models/card');

// GET all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create new card
exports.createCard = async (req, res) => {
  const card = new Card(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update a card
exports.updateCard = async (req, res) => {
  try {
    await Card.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Card updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE remove a card
exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndRemove(req.params.id);
    res.json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
