import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3003/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order Management</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.orderNo}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
