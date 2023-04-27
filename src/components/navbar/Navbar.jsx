import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar container'>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className='nav-list'>
        <Link to={'/login'} className="nav-list__item">
        <li >
         Login
        </li>
        </Link>
        <Link to={'/register'} className="nav-list__item">  
        <li>
        Register
        </li>
        </Link>
      </ul>
  </div>
  )
}

export default Navbar
