import React from 'react';

function RightSection({ imageUrl, productName, productDesp, learnMore }) {
    return ( 
    <div className="container mb-5">
        <div className="row p-3 align-items-center">
            <div className="col-12 col-md-4 order-2 order-md-1">
                <h1 className="fs-3">{productName}</h1>
                <p style={{lineHeight:"2rem"}}>{productDesp}</p>
                <div className="mb-3">
                    <a href={learnMore} className='remove-underline'>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-0 col-md-2 order-md-2'></div>
            <div className="col-12 col-md-6 order-1 order-md-3 mb-4 mb-md-0 text-center">
                <img src={imageUrl} className="img-fluid"/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;