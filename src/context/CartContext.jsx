import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Function to add item to cart with quantity
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add it with quantity
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Function to remove item from cart (removes all quantities)
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevCart) =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Function to complete payment
  const completePayment = () => {
    if (cartItems.length > 0) {
      setPaymentHistory((prevHistory) => [
        ...prevHistory,
        { id: Date.now(), items: cartItems, date: new Date().toLocaleString() },
      ]);
      setCartItems([]); // Empty the cart
    }
  };

  // Function to clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, paymentHistory, completePayment, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
