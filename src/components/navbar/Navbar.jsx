import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import hamburger from '../../assets/images/icons/hamburger-dark.svg'
import SupportMenu from './support-menu/SupportMenu';

const Navbar = () => {
  return (
    <nav>
      <h3><Link to={'/'} className='link-logo'>Oskar hyr bod</Link></h3>
      <ul className='nav-ul'>
        <li>Startsida</li>
        <li>Logga in</li>
        <li>Registrera dig</li>
      </ul>
      <SupportMenu />
      <div>
        <img className='nav-img' src={hamburger} />
      </div>
    </nav>
  )
}

export default Navbar
