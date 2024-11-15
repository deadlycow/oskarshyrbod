import React, { useState } from 'react'
import './searchbar.css'
import { useProducts } from '../../TestData'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const { filterProducts } = useProducts()

  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value)
    filterProducts(value)
  }

  return (
    <div>
      <input type="text" placeholder='Sök produkt' value={query} onChange={handleInputChange} />
    </div>
  )
}

export default SearchBar
