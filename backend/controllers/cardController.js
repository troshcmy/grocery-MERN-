const Card = require('../models/card');

// GET all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET find a card by ID
exports.findByCardId = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      // If no card is found with the given ID
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json({ message: 'Card retrieved successfully', card });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






// POST create new card
exports.createCard = async (req, res) => {
  console.log('Request Body:', req.body); // Add this line for logging
  const card = new Card(req.body);
  try {
    const newCard = await card.save();
    res.status(201).json({ message: 'Card created successfully', card: newCard });
  } catch (error) {
    res.status(400).json({ message: 'Invalid data provided' });
  }
};


// PUT update a card by ID
exports.updateCard = async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedCard) {
      // If no card is found with the given ID
      return res.status(404).json({ message: 'Card not found' });
    }

    res.json({ message: 'Card updated successfully', card: updatedCard });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// DELETE remove a card
exports.deleteCard = async (req, res) => {
  try {
    await Card.findByIdAndRemove(req.params.id);
    res.status(204).json;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

