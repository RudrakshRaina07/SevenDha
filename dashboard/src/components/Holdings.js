import React, { useContext } from "react";

import GeneralContext from "./GeneralContext";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const {holdings = [], priceLoading} = useContext(GeneralContext);
  console.log("CONTEXT HOLDINGS:", holdings.length);

  const context = useContext(GeneralContext);
  const labels = holdings.map((subArray) => subArray["name"]);

  const data = {
    labels,
        datasets: [
      {
        label: 'Stock Price',
        data: holdings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
    
  return ( 
    <>
      <h3 className="title">Holdings ({holdings.length})
          {priceLoading && <span style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }}>Updating prices...</span>}
      </h3>
      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
        {holdings.map((stock, index) => {
          const currVal = (stock.price || 0)*stock.qty;
          const isProfit = currVal - stock.avg*stock.qty >= 0.0;
          const profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";

          return (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price ? stock.price.toFixed(2) : "—"}</td>
              <td>{currVal ? currVal.toFixed(2) : "—"}</td>
              <td className={profClass}>{(currVal - stock.avg*stock.qty).toFixed(2)}</td>
              <td className={profClass}>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>
              <td>
                <button className="btn btn-red" onClick={() => context.openSellWindow(stock.name)}>Sell</button>
              </td>
            </tr>
          );
        })}
        </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data}/>
    </>
  );
}

export default Holdings;
