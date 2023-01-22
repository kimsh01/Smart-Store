import React from 'react';

const Search = () => {
    return (
        <section className='search'>
            <div className='container'>
                <span>
                    <h1>Bonit</h1>
                </span>

                <div className='search-input'>
                    <i className='fa fa-search'></i>
                    <input type='text' placeholder='Search and hit enter...' />
                    <span>All Category</span>
                </div>
            </div>
        </section>
    );
};

export default Search;