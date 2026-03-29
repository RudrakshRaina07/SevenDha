import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Charges from './Charges';

function PricingPage() {
    return ( 
        <>
            <Hero />
            <Brokerage 
                heading={"Charges for account opening"}
                tableHeading1={"Type of account"}
                tableHeading2={""}
                tableHeading3={"Charges"}
                row1Detail1={"Online account"} row1Detail2={""}row1 row1Detail3={<button className='btn btn-success'>Free</button>}
                row2Detail1={"Offline account"} row2Detail2={""} row2Detail3={<button className='btn btn-success'>Free</button>}
                row3Detail1={"NRI account (offline only)"} row3Detail2={""} row3Detail3={"₹ 500"}
                row4Detail1={"NRI account (offline only)"} row4Detail2={""} row4Detail3={"₹ 500"}
            />
            <Brokerage 
                heading={"Demat AMC (Annual Maintenance Charge)"}
                tableHeading1={"Value of holdings"}
                tableHeading2={"AMC"}
                tableHeading3={""}
                row1Detail1={"Up to ₹4 lakh"} row1Detail2={<button className='btn btn-success'>Free</button>} row1Detail3={""}
                row2Detail1={"₹4 lakh - ₹10 lakh"} row2Detail2={"₹ 100 per year, charged quarterly"} row2Detail3={""}
                row3Detail1={"Above ₹10 lakh"} row3Detail2={"₹ 300 per year, charged quarterly"} row3Detail3={""}
                row4Detail1={""} row4Detail2={""} row4Detail3={""}
            />
            <Brokerage
                heading={"Charges for optional value added services"}
                tableHeading1={"Service"}
                tableHeading2={"Biling Frequency"}
                tableHeading3={"Charges"}
                row1Detail1={"TickerTape"} row1Detail2={"Monthly / Annual"} row1Detail3={"Free: 0 | Pro: 249/2399"}
                row2Detail1={"Smallcase"} row2Detail2={"Per transaction"} row2Detail3={"Buy & Invest More: 100 | SIP: 10"}
                row3Detail1={"Kite Connect"} row3Detail2={"Monthly"} row3Detail3={"Connect: 500 | Personal: Free"}
                row4Detail1={""} row4Detail2={""} row4Detail3={""}
           />
           <Charges />
        </>
     );
}

export default PricingPage;