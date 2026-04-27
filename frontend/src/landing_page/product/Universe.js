import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <p className="fs-5 mt-5 mb-5">
            Want to know more about our technology stack? Check out the{" "}
            <a href="#" className="remove-underline">Zerodha.tech</a>{" "}blog.
          </p>
          <h1 className="mt-5 mb-5 fs-2">The Zerodha Universe</h1>
          <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/zerodhaFundhouse.png" className="img-fluid mb-3" style={{width:"50%"}}/>
          <p className="text-muted" style={{fontSize:"14px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/sensibullLogo.svg" className="img-fluid mb-3" style={{width:"50%"}}/>
          <p className="text-muted">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/goldenpiLogo.png" className="img-fluid mb-3" style={{width:"40%"}}/>
          <p className="text-muted">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/streakLogo.png" className="img-fluid mb-3" style={{width:"50%"}}/>
          <p className="text-muted" style={{fontSize:"14px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/smallcaseLogo.png" className="img-fluid mb-3" style={{width:"50%"}}/>
          <p className="text-muted">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/dittoLogo.png" className="img-fluid mb-3" style={{width:"30%"}}/>
          <p className="text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>

        <div className="text-center mt-5 mb-5">
          <button className='p-2 btn btn-primary fs-5 px-4' style={{minWidth:"180px"}}>Signup now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;