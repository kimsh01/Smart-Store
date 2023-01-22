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
                    <label className="head-lable">Theme FAQ's</label>
                    <label className="head-lable">Need Helps</label>
                    <img src='' alt=''></img>
                    <label className="head-lable">EN</label>
                    <img src='' alt=''></img>
                    <label className="head-lable">USD</label>
                </div>
           </div>

        </>
    );
};

export default Head;