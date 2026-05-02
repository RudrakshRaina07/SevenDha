import React from 'react';
import {useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

    return ( 
      <div className='container p-3 mb-5'>
        <div className='row text-center'>
              <img src='media/homeHero.png' alt='Hero Image' className='mb-5 img-fluid'/>
              <h1 className='mt-5'>Invest in everything</h1>  
              <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
              <div>
                <button onClick={() => navigate('/signup')} className='p-2 btn btn-primary fs-5 w-auto px-4' style={{minWidth: "150px"}}>
                  Signup now
                </button>
              </div>
        </div>  
      </div>
    );
}

export default Hero;