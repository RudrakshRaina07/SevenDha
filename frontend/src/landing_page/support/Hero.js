import React from 'react';

function Hero() {
    return (
      <header style={{backgroundColor:"#f6f6f6"}}>
        <div className='container'>
          <div className='row border-bottom mb-5'>
              <div className='col-12 col-md-6 mb-3 mt-5'>
                <h1>Support Portal</h1>
              </div>
              <div className='col-12 col-md-6 mt-md-5 mb-3 d-flex justify-content-md-end'>
                <button className='btn btn-primary' style={{width:"6rem"}}>Tickets</button>
              </div>
              <div className='mb-5'>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
          </div>
        </div>
      </header>
      );
}

export default Hero;