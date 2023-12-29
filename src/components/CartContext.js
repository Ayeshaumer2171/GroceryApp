import React, { createContext, useState } from 'react';

  export const CartContext = createContext();

 export const CartProvider = ({ children }) => {
  const [cartCounter,setCartCounter]=useState(0);
  const [cartItems, setCartItems] = useState([]);

  const increment = (item) => {
    setCartCounter(cartCounter + 1); 
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartCounter(cartCounter - 1); 
      setCartItems(updatedCart);
    };
 
  return (
    <CartContext.Provider value={{cartCounter, increment,cartItems,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};







