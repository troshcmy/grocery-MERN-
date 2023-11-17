import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardManagement = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:3002/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Failed to fetch cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h2>Card Management</h2>
      <ul>
        {cards.map((card) => (
          <li key={card._id}>{card.customerName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardManagement;
