import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-cate'>
                <span class='fa-solid fa-border-all w-5'></span>
                <h4>
                    Categories <i className='fa fa-chevron-down'></i>
                </h4>
            </div>

            <div className='nav-ul'>
                <ul className='ul-list'>
                    <li>
                        <Link to ='/'>home</Link>
                    </li>
                    <li>
                        <Link to ='/pages'>pages</Link>
                    </li>
                    <li>
                        <Link to ='/user account'>user account</Link>
                    </li>
                    <li>
                        <Link to ='/vendor account'>vendor account</Link>
                    </li>
                    <li>
                        <Link to ='/track my order'>track my order</Link>
                    </li>
                    <li>
                        <Link to ='/contact'>contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;