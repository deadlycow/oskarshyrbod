import React from 'react'

const BtnRent = ({ className, text, onClick}) => {
  return (
    <>
     <button className={`btn ${className}`} onClick={onClick}>{text}</button> 
    </>
  )
}

export default BtnRent
