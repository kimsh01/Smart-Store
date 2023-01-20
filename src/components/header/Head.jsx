import React from 'react';

const Head = () => {
    return (
        <>
           <div className='head-blue'>
                <div className='head-left'>
                    <span>
                        <i className="fa-solid fa-phone"></i> 
                        <lable>+88012 3457 7894</lable>
                    </span> 
                    <span>
                        <i className="fa-regular fa-envelope"></i>
                        <lable>example@gmail.com</lable>
                    </span>
                </div>

                <div className='head-right'>
                    <lable>Theme FAQ's</lable>
                    <lable>Need Helps</lable>
                    <img src='' alt=''></img>
                    <lable>EN</lable>
                    <img src='' alt=''></img>
                    <lable>USD</lable>
                </div>
           </div>

        </>
    );
};

export default Head;