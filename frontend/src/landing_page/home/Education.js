import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-3 p-md-5'>
            <div className='row'>
                <div className='col-12 col-md-6 mb-4 mb-md-0'>
                    <img src='media/education.svg' className='img-fluid' style={{width: "75%"}}/>
                </div>
                <div className='col-12 col-md-6 pt-3'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>                
                </div>
            </div>
        </div>
     );
}

export default Education;