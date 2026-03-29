import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <p className=" fs-5 mt-5 mb-5">
            Want to know more about our technology stack? Check out the{" "}
            <a href="#" className="remove-underline">
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
          <h1 className="mt-5 mb-5 fs-2">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/zerodhaFundhouse.png" style={{ width: "50%", marginBottom :"1rem" }} />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Our asset management venturethat is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/sensibullLogo.svg" style={{ width: "50%", marginBottom :"1rem" }} />
          <p className="text-muted text-small">
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/goldenpiLogo.png" style={{ width: "40%", marginBottom :"1rem" }} />
          <p className="text-muted text-small">
            Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/streakLogo.png" style={{ width: "50%", marginBottom :"1rem" }} />
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/smallcaseLogo.png" style={{ width: "50%", marginBottom :"1rem" }} />
          <p className="text-muted text-small">
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.          </p>
        </div>
        <div className="col-4 p-3 mt-5 text-center">
          <img src="media/dittoLogo.png" style={{ width: "30%", marginBottom :"1rem" }} />
          <p className="text-muted text-small">
            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5' style={{width : "15%", margin : "0 auto", marginBottom : "10%"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Universe;
