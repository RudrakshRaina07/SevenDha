import React from 'react';

function Hero() {
    return (
        <div className='container mt-5 mb-5 border-bottom'>
            <div className='row text-center'>
                <h1 className='fs-3 mb-3' style={{color : "#424242"}}> Products</h1>
                <h4 className='text-muted fs-5 mb-4'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mb-5'>Check out our <a href="" className="remove-underline">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
      );
}

export default Hero;