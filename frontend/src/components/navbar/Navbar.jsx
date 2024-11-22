import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

import hamburger from '../../assets/images/icons/hamburger-dark.svg'
import SupportMenu from './support-menu/SupportMenu'
import ShoppingCart from '../shoppingcart/ShoppingCart';

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  const handleMenuToggle = () => {
    setMenu(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current &&
         !menuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        setMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav>
      <h3 className='nav-logo-text'><Link to={'/oskarshyrbod/'} onClick={() => setMenu(false)} className='link-logo'>Oskar hyr bod</Link></h3>
      <ul className={`nav-ul ${menu ? 'open' : ''}`} ref={menuRef}>
        <li>Registrera dig</li>
        <li>Logga in</li>
        <li>Logga in</li>
        <li>Logga in</li>
        <li><NavLink to={'/oskarshyrbod/adminpage'} onClick={() => setMenu(false)}>Admin page</NavLink></li>
      </ul>

      <div className='nav-right'>
        <div className='nav-inner-container'>
          <ShoppingCart />
          <SupportMenu />
        </div>
        <div className='nav-hamburger-container' onClick={handleMenuToggle} ref={hamburgerRef}>
          <img src={hamburger} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
