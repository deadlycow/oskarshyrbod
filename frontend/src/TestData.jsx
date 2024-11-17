import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

import img1 from './assets/images/scissor.jpg';
import img2 from './assets/images/strait-wrench.jpg';
import img3 from './assets/images/wrench.jpg';


const testProducts = [
  { id: '0', title: 'Sax', pic: img1, info: 'about the tool', price: 123, quantity: 0 },
  { id: '1', title: 'Rak ringnyckel', pic: img2, info: 'about the tool', price: 341, quantity: 0 },
  { id: '2', title: 'Svängd ringnyckel', pic: img3, info: 'about the tool', price: 12, quantity: 0 }
];

for (let i = 3; i < 5; i++) {
  testProducts.push({ id: `${i}`, title: 'loop object', pic: img1, info: 'random words', price: 8, quantity: 0 });
}

export const TestData = ({ children }) => {
  const [products, setProducts] = useState(testProducts)
  const [filteredProduct, setFilteredProduct] = useState([])

  const filterProducts = (query) => {
    const result = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
    setFilteredProduct(result)
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, filterProducts, filteredProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)


