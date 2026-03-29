import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesp,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row p-3" >
            <div className="col-5">
                <img src={imageUrl}/>
            </div>
            <div className="col-2"></div>
            <div className="col-5">
                <h1 className="fs-3 mt-3">{productName}</h1>
                <p style={{lineHeight : "2rem"}}>{productDesp}</p>
                <div className="mb-3">
                    <a href={tryDemo} className="remove-underline">Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft : "60px", textDecoration: "none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div>
                    <a href={googlePlay} className="remove-underline"><img src='media/googlePlayBadge.svg' /> </a>
                    <a href={appleStore} style={{textDecoration : "none", marginLeft : "20px"}}><img src='media/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection;
