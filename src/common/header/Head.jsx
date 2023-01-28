import React from 'react';

const Head = () => {
    return (
        <>
           <div className='head-blue'>
                <div className='head-left'>
                    <span>
                        <i className="fa-solid fa-phone"></i> 
                        <label>+88012 3457 7894</label>
                    </span> 
                    <span>
                        <i className="fa-regular fa-envelope"></i>
                        <label>example@gmail.com</label>
                    </span>
                </div>

                <div className='head-right'>
                    <label className="head-label">Theme FAQ's</label>
                    <label className="head-label">Need Helps</label>
                    <label className="head-label"><span>🏳️‍⚧️</span>EN</label>
                    <label className="head-label"><span>🏳️‍⚧️</span>USD</label>
                    
                </div>
           </div>

        </>
    );
};

export default Head;