import React from 'react'

const Btn = ({ className, text, onClick}) => {
  return (
    <>
      <button className={`btn ${className}`} onClick={onClick}>{text}</button>
    </>
  )
}

export default Btn
