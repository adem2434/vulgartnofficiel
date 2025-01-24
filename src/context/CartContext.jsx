import React, { createContext, useState } from 'react';

    export const CartContext = createContext();

    export const CartProvider = ({ children }) => {
      const [cart, setCart] = useState([]);

      const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor);
        if (existingItem) {
          setCart(cart.map(item =>
            item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor ? { ...item, quantity: item.quantity + product.quantity } : item
          ));
        } else {
          setCart([...cart, { ...product, quantity: product.quantity }]);
        }
      };

      const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
      };

      const updateQuantity = (productId, quantity) => {
        setCart(cart.map(item =>
          item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
        ));
      };

      const clearCart = () => {
        setCart([]);
      };

      return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
          {children}
        </CartContext.Provider>
      );
    };
