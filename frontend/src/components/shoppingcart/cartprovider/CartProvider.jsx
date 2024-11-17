import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])


  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id)

    if (existingProduct) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    }
    else { setCartItems([...cartItems, { ...product, quantity: 1 }]) }
  }

  const removeOneFromCart = (productId) => {
    const existingProduct = cartItems.find(item => item.id === productId)

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
      }
      else {
        setCartItems(cartItems.filter(item => item.id !== productId))
      }
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeOneFromCart, getCartItemCount, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)