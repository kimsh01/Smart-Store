import React from 'react';
import { useState } from 'react';

const FlashCard = ({ productItems }) => {
  return (
    <>
      { productItems.map((productItems) => {
        // map함수가 실행이 안됨 -> true && expression 은 항상 expression이 실행되므로 && 활용. 
        //| useState로 먼저 초기값 설정해줘도 됨.
        return(
          <div className='box'>
          <div className='product mtop'>
            <div className="img">
            
                <img src='' alt='' />
                <div className='product-like'>
                  <label></label> <br />
                  <i className='fa-regular fa-heart'></i>
                </div>
                <span className='discount'>{productItems.discount}% Off</span>
                <div className="product-details">
                  <h3></h3>
                </div>
                <div className="rate">
                  <i className='fa fa-star'></i>
                </div>
              </div>
            </div>      
          </div>
        )
      })}
    </>
  );
};

export default FlashCard;