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
