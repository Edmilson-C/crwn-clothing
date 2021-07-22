import React, { createContext, useState, useEffect } from "react";

import { addItemToCart, removeItemsFromCart, clearItems, getCartItemsCount, getCartTotal } from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  cartItemsCount: 0,
  cartTotal: 0,
  cartItems: [],
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeItemsFromCart(cartItems, item));
  const clearItemFromCart = (item) => setCartItems(clearItems(cartItems, item));
  
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems))
    setCartTotal(getCartTotal(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        hidden,
        cartItemsCount,
        cartTotal,
        cartItems,
        toggleHidden,
        addItem,
        removeItem,
        clearItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider