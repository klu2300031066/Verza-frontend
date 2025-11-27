import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/Aboutus';
import Computers from './components/Computers';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Pendrives from './components/Pendrives';
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';

import * as Components from './components';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Components.HomePage />}>
          <Route index element={<Components.AboutUs />} />
          <Route path="home" element={<Components.Home />} />
          <Route path="about-us" element={<Components.AboutUs />} />
          <Route path="computers" element={<Components.Computers />} />
          <Route path="mobiles" element={<Components.Mobiles />} />
          <Route path="laptops" element={<Components.Laptops />} />
          <Route path="pendrives" element={<Components.Pendrives />} />
          <Route path="login" element={<Components.Login />} />
          <Route path="signup" element={<Components.Signup />} />
          <Route path="productpage" element={<Components.ProductPage />} />
          <Route path="cart" element={<Components.Cart />} />
          <Route path="payment" element={<Components.Payment />} />
          <Route path="orders" element={<Components.Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App
