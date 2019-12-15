import React from 'react'
import { NavLink } from 'react-router-dom'
import '../screens/styles/NavIn.css'

const NavIn = () => 
<>

<nav className ='nav-signed-in'>
<NavLink to = '/' className='genius-title-in'>Game Genius  </NavLink>


<NavLink to ='/categories' className='categories'>Categories</NavLink>

{/* <NavLink to ='/FPS' className='FPS-Games'>FPS</NavLink>
<NavLink to ='/Sports' className='Sports-Games-Link'>Sports</NavLink>
<NavLink to ='/RPG' className='RPG-Games-Link'>RPG</NavLink> */}

<NavLink to ='/user-page' className='User-Page'>Account</NavLink>
<NavLink to ='sign-out' className='Sign-Out'>Sign Out</NavLink>

</nav>
</>
export default NavIn;