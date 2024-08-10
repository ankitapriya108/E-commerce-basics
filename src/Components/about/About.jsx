import React from 'react'
import './about.css'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div className='wrapper'>
        <h1>About-Page</h1>
        <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
        <Link to='contact'>Contact-us</Link>
        <Link to='channel'>Channel</Link>
        <Link to='other'>Other</Link>
        <Outlet/>
        </div>
  )
}



export default About