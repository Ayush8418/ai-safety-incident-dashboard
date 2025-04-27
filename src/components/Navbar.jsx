import React, { useState } from 'react'
import logo from '../logo.svg'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt="company logo" />
            <h2>Secure AI</h2>
        </div>
        <div className='navbar-center'>
            <ul>
                <li>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/report">report</NavLink>
                </li>
                <li>
                    <NavLink to="/search">search</NavLink>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
