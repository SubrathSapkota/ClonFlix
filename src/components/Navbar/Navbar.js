import React from 'react'
import NavMenu from './NavMenu'
import Logo from '../../assets/NLogo.png'
import Avatar from '../../assets/avatar.jpg'
import { FaRegBell } from 'react-icons/fa';

import './Navbar.css'

function Navbar() {
   return <>
      <div className='nav'>
         <div className='nav_right'>
            <img className='logo_img' src={Logo} alt='' />
            <NavMenu />
         </div>
         <div className='nav_left'>
            <input className='search' type='text'/>
            <FaRegBell className='notification'/>
            <img className='avatar' src={Avatar} alt='' />
         </div>
      </div>
   </>
}

export default Navbar