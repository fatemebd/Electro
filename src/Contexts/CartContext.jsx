// import { createContext } from 'react';

// export const MyContext = createContext("");

import { CartItems } from "@/pages/api/APIs";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

// Create a new context
const CartContext = createContext();

// Create a custom hook to access the context
export const useCart = () => {
  return useContext(CartContext);
};

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const get = async () => {
    try {
      const response = await CartItems();
      console.log(response.data);
      setCartItems(response.data.cart_items);
      setTotalCost(Number(response.data.total_cost));
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    get();
  }, []);
  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  // get();
  // Function to remove items from the cart
  const removeFromCart = (index) => {
    let newCartItems = [...cartItems];
    newCartItems = newCartItems.filter((item) => item.id !== index);
    // newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};
