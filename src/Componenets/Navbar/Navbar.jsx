import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import search from '../../Assets/search.webp';
import './navbar.css'; 

function Navbar({ onSearch }) {
    const [clicked, setClicked] = useState(false);
    const [query, setQuery] = useState('');

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <>
            <div className='navbar-new'>
                <ul className={`navbar-warp ${clicked ? 'active' : ''}`}>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/AboutUs/AboutUs'>
                            About Us
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/Services/Services'>
                            Services
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/Divisions/Divisions'>
                            Divisions
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/Media/PhotoGallery'>
                            Media
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/Publications/Publications'>
                            Publications
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/Regulations/Regulations'>
                            Regulations
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? 'nav-links active-nav-link' : 'nav-links'
                            } 
                            to='/FAQ/FAQ'>
                            FAQ
                        </NavLink>
                    </li>
                    <li className='nav-element'>
                        <div className='dropdown'>
                         <div className='nav-links'>
                                Contact Us<span className="dropdown-arrow">▼</span>
                         </div>
                        <div className='dropdown-content'>
                           <NavLink to='/ContactUs/ContactDetails'>Contact Details</NavLink>
                           <NavLink to='/ContactUs/ContactUsInquiries'>Inquiries</NavLink>
                        </div>
                         </div>
                    </li>
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
                        <img src={search} alt='search' className='nav-search-icon' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
