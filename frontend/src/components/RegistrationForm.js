import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/register', {
        username,
        password,
      });

      // Обработка успешной регистрации, например, перенаправление пользователя на страницу входа
    } catch (error) {
      console.error('Registration failed:', error);
      // Показать сообщение об ошибке пользователю
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;