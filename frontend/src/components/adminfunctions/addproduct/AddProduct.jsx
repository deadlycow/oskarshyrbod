import React, { useState } from 'react'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/add-product', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // const data = await response.json();
        setFormData({
          title: '',
          price: '',
          category: ''
        })
        console.log('Product added successfully!')
      } else {
        console.log('Failed to add product.');
      }

    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id='title' name='title' value={formData.title} onChange={handleChange} type="text" />
      <br />
      <label htmlFor="price">Price</label>
      <input id='price' name='price' value={formData.price} onChange={handleChange} type="text" />
      <br />
      <label htmlFor="category">Category</label>
      <input id='category' name='category' value={formData.category} onChange={handleChange} type="text" />
      <br />
      <button type='submit'>Lägg till</button>
    </form>
  )
}

export default AddProduct