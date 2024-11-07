import React from 'react'
import './products.css'
import Product from './product/Product';
import { useProducts } from '../../TestData';

const Products = () => {
const { products } = useProducts()

  return (
    <div className='products-layout'>
      <Product products={products} />
    </div>
  )
}

export default Products
