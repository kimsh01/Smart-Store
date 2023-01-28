import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    
    return (
        <div className='nav'>
            <div className=' nav-cate'>
                <span className='fa-solid fa-border-all'></span>
                <h4>
                    Categories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>

            <div className='nav-ul'>
                <ul className='ul-list'>
                    <li className='nav-list'>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li className='nav-list'>
                        <Link to ='/pages'>Pages</Link>
                    </li>
                    <li className='nav-list'>
                        <Link to ='/user account'>User account</Link>
                    </li>
                    <li className='nav-list'>
                        <Link to ='/vendor account'>Vendor account</Link>
                    </li>
                    <li className='nav-list'>
                        <Link to ='/track my order'>Track my order</Link>
                    </li>
                    <li className='nav-list'>
                        <Link to ='/contact'>Contact</Link>
                    </li>
                </ul>
                
            </div>

        </div>
    );
};
// setMobileMenu(!MobileMenu)
// document.getElementsByClassName('nav-ul').style.display = 'flex'
export default Navbar;