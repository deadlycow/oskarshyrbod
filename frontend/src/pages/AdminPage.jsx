import React from 'react'
import AddProduct from '../components/adminfunctions/addproduct/AddProduct'
import RemoveProduct from '../components/adminfunctions/removeproduct/RemoveProduct'

const AdminPage = () => {
  
  return (
    <div>
       <AddProduct />
       <br />
       <RemoveProduct />
    </div>
  )
}

export default AdminPage
