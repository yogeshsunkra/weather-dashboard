
import React from 'react'
import './navbar.css'
import './utility.css'
import { FaSearch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Logo from '../assets/logo.png';



const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='primaryNavbar'>
      <div className='logoContainer'>
        <img src={Logo} alt='Weather Dashboard'></img>
      </div>
      <div className='locationBox flex'>
        <MdLocationPin/> <span className='text-sm font-400'>Bhilai,IN</span>
        </div>
      <div className='flex searchBar'>
      <FaSearch/>
        <input  type = 'text' id='search ' placeholder='Search City' ></input>
      </div>
      <div className='gitBox'><FaGithub/></div>
      </div>
      
      <div className='secondaryNavbar'>
        <div className='text-md font-500'>
          <span>Today</span>
        </div>
        <div className='text-md font-400'>Tommorow</div>
        <div className='text-md font-400'>5-Day Forecast</div>
      </div>



      <div className='anotherDiv'></div>

    </div>
  )
}

export default Navbar
