import React from 'react';

function Charges() {
    return (  
        <>
            <div className='container'>
                <div className='row mb-5'>
                    <h3>Charges explained</h3>
                </div>
                <div className='row text-muted'>
                    <div className='col-12 col-md-6 p-3' style={{lineHeight:"1.5rem"}}>
                        <h3 style={{fontSize:"20px"}}>Securities/Commodities transaction tax</h3>
                        <p style={{fontSize:"12px"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p style={{fontSize:"12px"}}>When trading at , STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                        <h3 style={{fontSize:"20px"}}>Transaction/Turnover Charges</h3>
                        <p style={{fontSize:"12px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p style={{fontSize:"12px"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.</p>
                        <p style={{fontSize:"12px"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    </div>
                    <div className='col-12 col-md-6 p-3' style={{lineHeight:"1.5rem"}}>
                        <h3 style={{fontSize:"20px"}}>GST</h3>
                        <p style={{fontSize:"12px"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                        <h3 style={{fontSize:"20px"}}>SEBI Charges</h3>
                        <p style={{fontSize:"12px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <h3 style={{fontSize:"20px"}}>DP (Depository participant) charges</h3>
                        <p style={{fontSize:"12px"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5  fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <h3 style={{fontSize:"20px"}}>Pledging charges</h3>
                        <p style={{fontSize:"12px"}}>₹30 + GST per pledge request per ISIN.</p>
                    </div>
                    <div className='row'>
                        <p style={{fontSize:"20px"}}>Disclaimer</p>
                        <p style={{fontSize:"12px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Charges;