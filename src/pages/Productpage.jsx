import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../TestData';

const Productpage = () => {

  const { productId } = useParams()
  const { products } = useProducts()


  const product = products.find(p => p.id === productId);

  if (!product) return <p>Produkten kunde inte hittas</p>

  return (
    <div>
      <h1>Product id:{product.id}</h1>
      <p>{product.titel}</p>
      <img src={product.pic} />
      <p>{product.info}</p>
      <button>Hyr</button>
    </div>
  )
}

export default Productpage

