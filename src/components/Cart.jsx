import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const handleCheckout = () => {
    navigate("/payment"); // Navigate to Payment Page
  };

  const handlePurchase = () => {
    setPurchaseCompleted(true);
    clearCart();
    setTimeout(() => {
      setPurchaseCompleted(false);
      navigate("/");
    }, 3000);
  };

  if (purchaseCompleted) {
    return (
      <div className="purchase-completed">
        <div className="success-icon">✅</div>
        <h2>Purchase Completed!</h2>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        <p>Redirecting to home page...</p>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity) || 1);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`http://localhost:8080/api/products/images/${item.imagePath}`} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price.toLocaleString()} each</p>
                <div className="cart-quantity-controls">
                  <label>Qty:</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-input"
                  />
                  <span className="item-total">Total: ₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
          </div>
          <div className="cart-actions">
            <button onClick={handleCheckout}>Proceed to Checkout</button>
            <button onClick={handlePurchase} className="purchase-btn">Purchase Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
