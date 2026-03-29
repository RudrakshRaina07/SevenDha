import React from 'react';

function RightSection({
    imageUrl,
    productName,
    productDesp,
    learnMore,
}) {
    return ( 
    <div className="container mb-5">
        <div className="row p-3" style={{alignItems : "center"}} >
            <div className="col-4">
                <h1 className="fs-3 ">{productName}</h1>
                <p style={{lineHeight : "2rem"}}>{productDesp}</p>
                <div className="mb-3">
                    <a href={learnMore} className='remove-underline'>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-2'></div>
            <div className="col-6">
                <img src={imageUrl}/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;