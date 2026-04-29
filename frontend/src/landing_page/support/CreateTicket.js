import React from "react";

function CreateTicket() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              <span className="mx-auto">Account Opening</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">Resident individual</a></li>
              <li><a className="dropdown-item text-primary" href="#">Minor</a></li>
              <li><a className="dropdown-item text-primary" href="#">Non Resident Indian (NRI)</a></li>
              <li><a className="dropdown-item text-primary" href="#">Company, Partnership, HUF and LLP</a></li>
              <li><a className="dropdown-item text-primary" href="#">Glossary</a></li>
            </ul>
          </div>

          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-user"></i>
              <span className="mx-auto">Your Sevendha Account</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">Your Profile</a></li>
              <li><a className="dropdown-item text-primary" href="#">Account modification</a></li>
              <li><a className="dropdown-item text-primary" href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
              <li><a className="dropdown-item text-primary" href="#">Nomination</a></li>
              <li><a className="dropdown-item text-primary" href="#">Transfer and conversion of securities</a></li>
            </ul>
          </div>

          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              <span className="mx-auto">Kite</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">IPO</a></li>
              <li><a className="dropdown-item text-primary" href="#">Trading FAQs</a></li>
              <li><a className="dropdown-item text-primary" href="#">Margin Trading Facility (MTF) and Margins</a></li>
              <li><a className="dropdown-item text-primary" href="#">Charts and orders</a></li>
              <li><a className="dropdown-item text-primary" href="#">Alerts and Nudges</a></li>
            </ul>
          </div>

          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-money-bill-1-wave"></i>
              <span className="mx-auto">Funds</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">Add money</a></li>
              <li><a className="dropdown-item text-primary" href="#">Withdraw money</a></li>
              <li><a className="dropdown-item text-primary" href="#">Add bank accounts</a></li>
              <li><a className="dropdown-item text-primary" href="#">eMandates</a></li>
            </ul>
          </div>

          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-location-crosshairs"></i>
              <span className="mx-auto">Console</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">Portfolio</a></li>
              <li><a className="dropdown-item text-primary" href="#">Corporate actions</a></li>
              <li><a className="dropdown-item text-primary" href="#">Funds statement</a></li>
              <li><a className="dropdown-item text-primary" href="#">Reports</a></li>
              <li><a className="dropdown-item text-primary" href="#">Profile</a></li>
            </ul>
          </div>

          <div className="dropdown mb-5">
            <a className="btn border btn-lg dropdown-toggle w-100 d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-circle-notch"></i>
              <span className="mx-auto">Coin</span>
            </a>
            <ul className="dropdown-menu w-100">
              <li><a className="dropdown-item text-primary" href="#">Mutual funds</a></li>
              <li><a className="dropdown-item text-primary" href="#">National Pension Scheme (NPS)</a></li>
              <li><a className="dropdown-item text-primary" href="#">Features on Coin</a></li>
              <li><a className="dropdown-item text-primary" href="#">Payments and Orders</a></li>
              <li><a className="dropdown-item text-primary" href="#">General</a></li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="border border-dark mb-4" style={{backgroundColor:"#FFD09B", lineHeight:"4"}}>
            <ul>
              <li><a className="remove-underline">Offer for sale (OFS) – January 2026</a></li>
              <li><a className="remove-underline">Rights Entitlements listing in January 2026</a></li>
            </ul>
          </div>
          <div className="mt-3 mb-5 border" style={{lineHeight:"3"}}>
            <h3 className="fs-5 mb-3 mt-3 mx-2">Quick Links</h3>
            <p className="border-top"><a href="#" className="remove-underline mx-4">1. Track account opening</a></p>
            <p className="border-top"><a href="#" className="remove-underline mx-4">2. Track segment activation</a></p>
            <p className="border-top"><a href="#" className="remove-underline mx-4">3. Intraday margins</a></p>
            <p className="border-top"><a href="#" className="remove-underline mx-4">4. Kite user manual</a></p>
            <p className="border-top"><a href="#" className="remove-underline mx-4">5. Learn how to create a ticket</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;