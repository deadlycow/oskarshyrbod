import React, { useState, useEffect } from 'react'
import './shoppingcart.css'

import cartIcon from '../../assets/images/icons/shopping-cart-light.svg'
import trash from '../../assets/images/icons/trash-light.svg'
import Btn from '../buttons/Btn'
import { useCart } from './cartprovider/CartProvider'

const ShoppingCart = () => {
  const [open, setOpen] = useState(false)
  const { cartItems, addToCart, removeFromCart, removeOneFromCart, getCartItemCount, getTotalPrice } = useCart()

  useEffect(() => {
    if (getCartItemCount() === 0) {
      setOpen(false);
    }
  }, [cartItems])


  const openCart = () => {
    if (getCartItemCount()) {
      setOpen(prev => !prev)
    }
  }

  return (
    <div className='cart-container'>
      <div className='link-cart gb-position-relative' onClick={openCart}>
        <img src={cartIcon} alt='shopping-cart icon' />
        <div className='cart-counter'>
          <p><b>{getCartItemCount()}</b></p>
        </div>
      </div>
      <div className={`cart ${open ? 'cart-open' : ''}`}>
        <span className='cart-total'>Total:{getTotalPrice()} kr/dag</span>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img className='cart-img' src={item.pic} />
            <div className='item-box'>
              <p className='item-titel'>{item.title}</p>
              <p className='item-remove' onClick={() => removeFromCart(item.id)}><img src={trash} /></p>
              <p className='item-price'>{item.price}kr/dag</p>
              <div className='item-add-sub'>
                <Btn className='add' text='+' onClick={() => addToCart(item)} />
                <Btn className='sub' text='-' onClick={() => removeOneFromCart(item.id)} />
                <p className='item-quantity'>{item.quantity} st</p>
              </div>
            </div>
          </div>
        ))}
        <Btn text='Kassan'/>
      </div>
    </div>
  )
}

export default ShoppingCart
