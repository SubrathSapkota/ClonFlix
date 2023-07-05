import React from 'react'
import './NavMenu.css'

function NavMenu() {
   return <>
      <div className='navMenu'>
         <ul className='navbar_ul'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>TVShow</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>Latest</a></li>
            <li><a href='#'>My List</a></li>
            <li><a href='#'>Brows by Language</a></li>
         </ul>
      </div>
   </>
}

export default NavMenu