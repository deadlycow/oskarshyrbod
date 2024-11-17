import React, { useState } from 'react'
import './updateproduct.css'

const UpdateProduct = ({ product }) => {
  const [open, setOpen] = useState(false)
  const [updateProduct, setUpdateProduct] = useState({
    title: product.title,
    price: product.price,
    category: product.category,
  })

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct({ ...updateProduct, [name]: value })
  }

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/update-product/${product.id_product}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateProduct),
      })
      if (response.ok) {
        console.log('Product updated successfully!')
        setOpen(false)
      } else {
        console.log('Failed to update product.')
      }
    } catch (error) {
      console.error('Error updating product', error)
    }
  }


  return (
    <>
      <button onClick={handleOpen}>Change</button>
      {open && (
        <div className='input-change'>
          <input type="text" name='title' value={updateProduct.title} onChange={handleChange} />
          <input type="text" name='price' value={updateProduct.price} onChange={handleChange} />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleOpen}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}

export default UpdateProduct
