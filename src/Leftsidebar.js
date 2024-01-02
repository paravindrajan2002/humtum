import React from 'react'
import logo from './img/logo.png';
import sideimage from './img/sideimage.png';
import { FaLink,FaMicrosoft } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Leftsidebar = () => {

  const activeLink = 'active'
  const normalLink = '' 
   
  return (
    <div  className='sidebar col-md-2 col-lg-2 '>
      <header className=" navbar navbar-dark ">
        <Link className="navbar-brand  me-0 px-3" to="/"><img src={logo} className='img-fluid' alt="logo" /></Link>
        <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
      </header>
      <nav id="sidebarMenu" className="d-md-block collapse ">
      <div className="position-sticky pt-3">     
     
        <ul className="nav flex-column">
        <li className="nav-item text-center">
            <NavLink  to="/" className={({ isActive }) => isActive ? activeLink: normalLink } >
             <FaMicrosoft /><br/>
              <span className=''>Dashborad</span>
            </NavLink>
          </li>
          <li className="nav-item text-center">
            <NavLink  to="/link1" className={({ isActive }) => isActive ? activeLink: normalLink }>
             <FaLink /><br/>
              <span className=''>link 1</span>
            </NavLink>
          </li>
          <li className="nav-item text-center">
            <Link  to="/" className={({ isActive }) => isActive ? activeLink: normalLink }>
            <FaLink /><br/>
              <span className=''>link 2</span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link  to="/link3" className={({ isActive }) => isActive ? activeLink: normalLink }>
            <FaLink /><br/>
              <span className=''>link 3</span>
            </Link>
          </li>
          <img src={sideimage} className='img-fluid' alt="" />
        </ul>
        
      </div>
    </nav>
   
    </div>
  )
}

export default Leftsidebar