import React from 'react';

function Hero() {
    return (
      <header style={{backgroundColor : "#f6f6f6"}}>
      <div className='container'>
        <div className='row border-bottom mb-5' >
            <div className='col-6 mb-5 mt-5'>
              <h1>Support Portal</h1>
            </div>
            <div className='col-6 mt-5'>
              <button className='btn btn-primary' style={{marginLeft : "35rem", width : "6rem"}}>Tickets</button>
            </div>
            <div className='mb-5'>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
        </div>
      </div>
      </header>
      );
}

export default Hero;