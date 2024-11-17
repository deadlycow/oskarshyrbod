import React, {useState} from 'react'
import './supportmenu.css'

const SupportMenu = () => {

  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(prev => !prev)
  }
  
  return (
    <div className='support-menu'>
      <p onClick={toggleMenu}>Support</p>
      <div className={`support-dropdown ${open ? 'show-support' : ''}`}>
        <a href="#">Kontakt info</a>
        <a href="#">Om oss</a>
        <a href="#">Hitta till boden</a>
      </div>
    </div>
  )
}

export default SupportMenu
