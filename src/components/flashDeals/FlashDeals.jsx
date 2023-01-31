import React from 'react';
import './style.css';
import FlashCard from './FlashCard';
const FlashDeals = () => {
    return (
        <>
            <section className='flash background'>
                <div className='container'>
                <div className='heading f_flex'>
                    <i className='fa fa-bolt'></i>
                    <h1>Flash Delas</h1>
                </div>
                    <FlashCard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        
        </>
    );
};

export default FlashDeals;