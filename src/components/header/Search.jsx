import React from 'react';
import { Link } from 'react-router-dom';

const Search = (  ) => {

    //  window.addEventListener("scroll", function () {
    //      const search = document.querySelector(".search")
    //      search.classList.toggle("active", window.scrollY > 100)
    // })

    return (
        <section className='search'>
            <div className='container'>
                <span>
                    <h1>Bonit</h1>
                </span>

                <div className='search-box'>
                    <i className='fa fa-search'></i>
                    <input type='text' placeholder='Search and hit enter...' />
                    <span>All Category</span>
                </div>
            </div>

            <div className='cart-box width'>
                <i className='fa fa-user icon-circle qudtls'></i>
                <div className='cart'>
                    <Link to='/cart'>
                        <i className='fa fa-shopping-bag icon-circles wlfkf'></i>
                        {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                    </Link>
                </div>  
            </div>
        </section>
    );
};

export default Search;