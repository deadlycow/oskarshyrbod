import React, {useState} from 'react'
import './shoppingcart.css'

import pic from '../../assets/images/scissor.jpg'
import cartIcon from '../../assets/images/icons/shopping-cart-light.svg'

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen(prev => !prev)
  }
  return (
      <div className='cart-container'>
        <div className='link-cart' onClick={openCart}><img src={cartIcon} alt='shopping-cart icon' /></div>
        <div className={`cart ${open ? 'cart-open' : ''}`}>
          <span className='cart-total'>Total: 123kr/dag</span>
          <div className="cart-item">
            <img className='cart-img' src={pic} alt="" />
            <div>
              <span className='item-titel'>Titel</span>
              <div className='item-box'>
                <p className='item-price'>123kr/dag</p>
                <p className='item-quantity'>1 st</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShoppingCart
