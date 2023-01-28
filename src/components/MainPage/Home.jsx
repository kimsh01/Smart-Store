import React from 'react';
import './Home.css';
import Categories from './Categories';
import Slider from './Slider';

const Home = () => {
    return (
        <section className='home'>
            <div className='container'>
                <Categories />
                <Slider />   
            </div>

        </section>
    );
};

export default Home;