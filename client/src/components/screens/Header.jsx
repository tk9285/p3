import React from 'react'
import { NavLink } from 'react-router-dom'
import '../screens/styles/landing.css'
import NavLand from '../shared/NavLand'
import NavIn from '../shared/NavIn'


const authenticatedOptions = (
  <NavIn>
    {/* <NavLink to='/' className='genius-title'>Game Genius  </NavLink>

    <NavLink to='/FPS' className='FPS-Games'>FPS</NavLink>
    <NavLink to='/Sports' className='Sports-Games-Link'>Sports</NavLink>
    <NavLink to='/RPG' className='RPG-Games-Link'>RPG</NavLink>
    <NavLink to ='/UserPage' className='User-Page'>Account</NavLink>

    <NavLink to="/change-password">Change Password</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink> */}
  </NavIn>
)

const unauthenticatedOptions = (
  // NavLanding
  <NavLand>
    <NavLink to="/sign-up" className='Landing-Sign-Up'>Sign Up</NavLink>
    <NavLink to='/' className='genius-title'>Game Genius  </NavLink>

    <NavLink to="/sign-in" className='Landing-Log-In'>Sign In</NavLink>
  </NavLand>
)

const alwaysOptions = (
  <div className="links">
    <NavLink to="/">Home</NavLink>
  </div>
)

const Header = ({ user }) => (
  <>
    {/* {user && <span className="navbar-text">Welcome, {user.email}</span>} */}
    {/* <div className="nav"> */}
    {/* {alwaysOptions} */}
    {user ? authenticatedOptions : unauthenticatedOptions}
    {/* </div> */}
  </>
)

export default Header