import React from 'react';
import './style.css' 

const Restaurant = () => {
  return (
    <>
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>BreakFast</span>
                <h2 className='card-title'>Shawarma</h2>
                <span className='card-description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quae rem numquam tempora quibusdam necessitatibus ipsa commodi blanditiis? Porro doloribus dignissimos architecto eos esse ipsa numquam repudiandae possimus exercitationem, eum, accusantium aliquid.</span>
            </div>
            <img src="" alt="" className='card-media' />
        </div>
    </div>
      
    </>
  )
}

export default Restaurant
