import React from 'react';

function Team() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center p-3 p-md-5 border-top'>
                <h1>People</h1>
            </div>
            <div className='row p-3 text-muted' style={{fontSize:"1rem", lineHeight:"1.8rem"}}>
                <div className='col-12 col-md-6 p-2 text-center mb-4 mb-md-0'>
                   <img src="media/nithinKamath.jpg" style={{borderRadius:"50%", width:"50%"}}/>
                   <h4 className='mt-3'>Nithin Kamath</h4>
                   <h6>Founder, CEO</h6>
                </div>
                <div className='col-12 col-md-6 p-3'>
                    <p>Nithin bootstrapped and founded Sevendha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Sevendha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage</a> / <a href='#' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='#' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>   
     );
}

export default Team;