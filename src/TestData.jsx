import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

import img1 from './assets/images/scissor.jpg';
import img2 from './assets/images/strait-wrench.jpg';
import img3 from './assets/images/wrench.jpg';


const testProducts = [
  { id: '0', titel: 'Sax', pic: img1, info: 'about the tool', price: 123 },
  { id: '1', titel: 'Rak ringnyckel', pic: img2, info: 'about the tool', price: 341 },
  { id: '2', titel: 'Svängd ringnyckel', pic: img3, info: 'about the tool', price: 12 }
];

for (let i = 3; i < 10; i++) {
  testProducts.push({ id: `${i}`, titel: 'loop object', pic: img1, info: 'random words', price: 8 });
}

export const TestData = ({ children }) => {
  const [products, setProducts] = useState(testProducts)

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)


