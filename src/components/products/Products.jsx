import React from 'react'
import './products.css'
import Product from './product/Product';
import { useProducts } from '../../TestData';

const Products = () => {
const { products, filteredProduct } = useProducts()

  const displayedProduct = filteredProduct.length > 0 ? filteredProduct : products

  return (
    <div className='products-layout'>
      <Product products={displayedProduct} />
    </div>
  )
}

export default Products
