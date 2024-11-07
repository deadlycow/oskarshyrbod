import React from 'react'

const BtnRent = ({ className, text}) => {
  return (
    <>
     <button className={`btn ${className}`}>{text}</button> 
    </>
  )
}

export default BtnRent
