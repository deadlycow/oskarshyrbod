import React from 'react'
import './buttons.css'
import { Link } from 'react-router-dom'

const LinkBtn = ({page, className, text}) => {
  return (
    <>
     <Link className={`btn ${className}`} to={`/${page}`}>
     {text}
     </Link> 
    </>
  )
}

export default LinkBtn
