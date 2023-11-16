const jwt = require('jsonwebtoken');
 
// Your secret key for signing and verifying tokens
const secretKey = 'your_secret_key';
 
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Split by space and get the second part
 
 
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }
 
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};
 
module.exports = authMiddleware;