import React from 'react';
import './product.css';
import LinkBtn from '../../buttons/LinkBtn'
import BtnRent from '../../buttons/BtnRent';
import { useCart } from '../../shoppingcart/cartprovider/CartProvider';

const Product = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <>
      {products.map(product => (
        <div key={product.id} className='product-card'>
          <h3 className='product-title'>{product.title}</h3>
          <div className='product-item-img-box'>
            <img className='product-item-img' src={product.pic} />
            <span className='float-price'>{product.price} Kr/dag</span>
          </div>
          <p className='product-info'>{product.info}</p>
          <div className="btn-container">
            <LinkBtn page={`oskarshyrbod/product/${product.id}`} text={'Mer info'} className={'link-btn-product'} />
            <BtnRent className={'btn-rent'} text={'Hyr'} onClick={() =>handleAddToCart(product)} />
          </div>
        </div>
      ))}
    </>
  )
};

export default Product;