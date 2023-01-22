import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)

    
    return (
        <div className='nav'>
            <div className='{MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} nav-cate' 
            onClick={() => setMobileMenu(false)}>
                <span className='fa-solid fa-border-all w-5'></span>
                <h4>
                    Categories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>

            <div className='nav-ul'>
                <ul className='ul-list {MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}'>
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
                <button className='toggle' onClick={() =>{ 
                    setMobileMenu(!MobileMenu);
                    document.getElementsByClassName('nav').style.display = 'flex';
                }}>
                    {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                </button>
            </div>
        </div>
    );
};
// setMobileMenu(!MobileMenu)
// document.getElementsByClassName('nav-ul').style.display = 'flex'
export default Navbar;