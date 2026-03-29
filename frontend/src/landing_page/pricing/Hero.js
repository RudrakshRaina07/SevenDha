import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center mt-5 p-5 mb-5'>
                <h1 className='fs-3'>Charges</h1>
                <p className='text-muted fs-5 mt-2'>List of all charges and taxes</p>
           </div>
                <div className='row mt-5 text-center p-5'>
                    <div className='col-4'>
                        <img src='media/pricingEquity.svg' style={{width : "70%"}}/>
                        <h3>Free equity delivery</h3>
                        <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/intradayTrades.svg' style={{width : "70%"}}/>
                        <h3>Intraday and F&O trades</h3>
                        <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4'>
                        <img src='media/pricingEquity.svg' style={{width : "70%"}}/>
                        <h3>Free direct MF</h3>
                        <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
        </div>
     );
}

export default Hero;