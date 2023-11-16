const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3003;

// Hardcoded secret key (not recommended for production)
const secretKey = 'YourSecretKey';

// In-memory user database for demonstration
const users = [];

app.use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Create and return a JWT token
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Protected route
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Split by space and get the second part
 
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
 
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
 
    res.json({ message: 'Protected route', user: decoded.username });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
