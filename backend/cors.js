// cors.js
const cors = require("cors");


// atlas connection string and localhost
const corsOptions = {
  origin: ["mongodb+srv://Grocery:Grocery@grocerytafecluster.3ks40zy.mongodb.net/", "http://localhost:3003", "*"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Enable CORS for all routes
const corsMiddleware = (req, res, next) => {
  cors(corsOptions)(req, res, (err) => {
    if (err) {
      // Handle CORS error
      return res.status(403).json({ error: "CORS not allowed", details: err.message });
    }
    next();
  });
};

module.exports = corsMiddleware;