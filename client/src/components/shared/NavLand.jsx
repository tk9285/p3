import React from 'react'
import { NavLink } from 'react-router-dom'
import './../screens/styles/NavLand.css'


const NavLand = () =>
    <nav>
        <NavLink to="/sign-up" className='Landing-Sign-Up'>Sign Up</NavLink>
        <NavLink to='/' className='genius-title'>Game Genius  </NavLink>

        <NavLink to="/sign-in" className='Landing-Log-In'>Sign In</NavLink>
    </nav>

export default NavLand;