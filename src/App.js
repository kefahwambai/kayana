import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import HomePage from "./components/Homepage/HomePage";
import Footer from './components/Footer/Footer';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: 'Gift Basket',
    description: 'A beautiful gift basket with assorted items.',
    price: 50,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Corporate Gift',
    description: 'Perfect gift for corporate clients.',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
];

function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route 
            path="/" 
            element={<ProductList products={products} onAddToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} onRemoveFromCart={removeFromCart} />} 
          />
          <Route 
            path="/checkout" 
            element={<Checkout />} 
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
