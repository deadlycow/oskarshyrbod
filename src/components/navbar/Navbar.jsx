import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import cartIcon from '../../assets/images/icons/shopping-cart-light.svg'
import hamburger from '../../assets/images/icons/hamburger-dark.svg'
import SupportMenu from './support-menu/SupportMenu'

const Navbar = () => {
  return (
    <nav>
      <h3><Link to={'/oskarshyrbod'} className='link-logo'>Oskar hyr bod</Link></h3>
      <ul className='nav-ul'>
        <li>Startsida</li>
        <li>Logga in</li>
        <li>Registrera dig</li>
      </ul>
      <Link className='link-cart'><img src={cartIcon} alt='shopping-cart icon' /></Link>
      <SupportMenu />
      <div>
        <img className='nav-img' src={hamburger} />
      </div>
    </nav>
  )
}

export default Navbar
