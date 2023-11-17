const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const cartsRoutes = require("./routes/cartsRoutes");
const employeesRoutes = require("./routes/employeeRoutes");
const ordersRoutes = require("./routes/orderRoutes");
const productsRoutes = require("./routes/productRoutes");
const loginRoutes = require("./routes/loginRoutes");
// app.use('/groceryItems', groceryItemRoutes);

app.get("/databases", (req, res) => {
  // Здесь вы делаете запрос к базе данных и получаете список баз данных
  
  const databases = [
    { _id: "1", name: "Database1" },
    { _id: "2", name: "Database2" },
    { _id: "3", name: "Database3" },
    { _id: "4", name: "Database4" },
  ];
  res.json(databases);
});

app.use("/carts", cartsRoutes);
app.use("/employees", employeesRoutes);
app.use("/orders", ordersRoutes);
app.use("/products", productsRoutes);
app.use("/login", loginRoutes);

app.use(bodyParser.json());
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
