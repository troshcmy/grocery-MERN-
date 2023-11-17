import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoginSignupForm from "./components/LoginSignupForm";
// import Header from "./components/Header";
// import HomePage from "./components/HomePage";
// import RegistrationForm from "./components/RegistrationForm";
// import LoginSignupForm from "./components/LoginSignupForm";
// import ProductManagement from "./components/ProductManagement";
// import OrderManagement from "./components/OrderManagement";

function App () {
  return (
    <div>
       <LoginSignupForm/>
        {/* <Route path="/login" exact element={<LoginSignupForm/>} />
          <Route path="/"  element={<HomePage/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/products" element={<ProductManagement/>} />
          <Route path="/orders" element={<OrderManagement/>} /> */}
      
    </div>
  );
};

export default App;
