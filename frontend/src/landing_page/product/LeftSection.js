import React from "react";

function LeftSection({ imageUrl, productName, productDesp, tryDemo, learnMore, googlePlay, appleStore }) {
  return (
    <div className="container mt-5">
        <div className="row p-3 align-items-center">
            <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
                <img src={imageUrl} className="img-fluid"/>
            </div>
            <div className="col-0 col-md-2"></div>
            <div className="col-12 col-md-5">
                <h1 className="fs-3 mt-3">{productName}</h1>
                <p style={{lineHeight:"2rem"}}>{productDesp}</p>
                <div className="mb-3">
                    <a href={tryDemo} className="remove-underline">Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"30px", textDecoration:"none"}}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="d-flex flex-wrap gap-2">
                    <a href={googlePlay} className="remove-underline"><img src='media/googlePlayBadge.svg' className="img-fluid" style={{maxWidth:"150px"}}/></a>
                    <a href={appleStore} style={{textDecoration:"none"}}><img src='media/appstoreBadge.svg' className="img-fluid" style={{maxWidth:"150px"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection;