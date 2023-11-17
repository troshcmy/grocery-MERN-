import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginAndSignInPage = () => {
  const [formType, setFormType] = useState('login');
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = 'login'; // По умолчанию используем эндпоинт для входа

      if (formType === 'signin') {
        endpoint = 'register'; // Используем эндпоинт для регистрации, если выбрана форма регистрации
      }

      const response = await fetch(`http://localhost:3003/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
          email: userData.email, // Добавляем email только для регистрации
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        alert(`Login Successful ${data.username}!`); // Обработка успешной аутентификации или регистрации
      } else {
        console.error('Authentication/Registration failed');
      }
    } catch (error) {
      console.error('Error during authentication/registration', error);
    }
  };

  return (
    <div className="container">
      <h1>Login and Sign In Page</h1>
      <div className="btn-group">
        <button
          className={`btn ${formType === 'login' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleFormTypeChange('login')}
        >
          Login
        </button>
        <button
          className={`btn ${formType === 'signin' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleFormTypeChange('signin')}
        >
          Sign In
        </button>
      </div>
      <div className="row">
        <div className="col-md-6">
          {formType === 'login' && (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="form-control"
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                className="form-control"
                autoComplete="current-password"
              />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          )}
        </div>
        <div className="col-md-6">
          {formType === 'signin' && (
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                className="form-control"
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="form-control"
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                className="form-control"
              />
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignInPage;
