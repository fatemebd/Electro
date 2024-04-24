// import { createContext } from 'react';

// export const MyContext = createContext("");


import React, { createContext, useState, useContext } from 'react';

// Create a new context
const CartContext = createContext();

// Create a custom hook to access the context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (index) => {
    let newCartItems = [...cartItems];
   newCartItems= newCartItems.filter(item => item.id !== index)
    // newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
