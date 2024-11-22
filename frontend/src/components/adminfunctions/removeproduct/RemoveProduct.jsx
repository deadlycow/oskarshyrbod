import React, { useState, useEffect } from 'react'
import './removeproduct.css'
import UpdateProduct from '../updateproduct/UpdateProduct';

const RemoveProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/');
      const data = await response.json();

      setProducts(data);
    };

    fetchProducts()
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete-product/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setProducts(prevproducts => prevproducts.filter(product => product.id_product !== id))
        console.log('Product deleted successfully')
      } else {
        console.log('Faild to delete product')
      }
    } catch (error) {
      console.error('Error deleteing product:', error)
    }
  }

  return (
    <div className='removeproduct-container'>
      <h1>Product List</h1>
      {products.map(product => (
        <div className='product-item' key={product.id_product}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <div>
            <UpdateProduct product={product} />
            <button onClick={() => handleDelete(product.id_product)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RemoveProduct
