import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import search from '../../Assets/search.webp'

function Navbar(onSearch) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };


    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      setQuery(event.target.value);
      onSearch(event.target.value);
    };
    
  return (
      <>
      <div className='navbar-new'>
             <ul className={`navbar-warp ${clicked ? 'active' : ''}`}>
                  <li className='nav-element'><NavLink className='nav-links' to='/'>Home</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>About Us</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Services</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Divisions</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Media</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Publications</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Regulations</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>FAQ</NavLink></li>
                  <li className='nav-element'><NavLink className='nav-links'>Contact Us</NavLink></li>
              </ul> 

              <div className='icon-display'>
              <div className='icons small-nav-icon' onClick={handleClick}>
         
                      {clicked ? (
            <ImCross className='icons close-nav-icon' />
          ) : (
            <GiHamburgerMenu className='icons close-nav-icon' />
                      )}
                  </div>
                  
                      <div className="nav-search-bar">
                      <input
                         type="text"
                         value={query}
                         onChange={handleChange}
                         placeholder=""
                         className='nav-serach-box'
                      />
                      
                          <img src={search} alt='search' className='nav-search-icon'/>
                      </div>
         
        </div>

      </div>
      </>
  )
}

export default Navbar