import React from 'react'
import './header.css'
import {Link} from "react-router-dom"




function Header() {
  return (
    <div className='header'>
        <h2>LOGO</h2>
        <ul>
         <li> <Link to='/'>Home</Link></li>
         <li> <Link to='/about'>About</Link></li>
         <li> <Link to='/gallery'>Gallery</Link></li>
         <li> <Link to='/blog'>Blog</Link></li>

        </ul>
        <button> Cart</button>        
    </div>
  )
}

export default Header