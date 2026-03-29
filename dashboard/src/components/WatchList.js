import React, { useState, useContext } from "react";
import {Tooltip, Grow} from "@mui/material";
import {watchlist} from "../data/data";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  
  const labels = watchlist.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }


  const {isBuyWindowOpen} = useContext(GeneralContext);
  return ( 
        <div className={`watchlist-container ${isBuyWindowOpen ? "compact" : ""}`}>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>

      <DoughnutChart data={data}/>
    </div>
   );
};

export default WatchList;

const WatchListItem = ({stock}) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
          <KeyboardArrowDown className="down"/>
          ) : (<KeyboardArrowUp className="up" />)
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  )
};

const WatchListActions = ({uid}) => {
  const context = useContext(GeneralContext);
  const handleBuyClick = () => {
    context.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip placement="top" arrow title="Buy (B)" TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        {/* <Tooltip placement="top" arrow title="Sell (S)" TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip> */}
        <Tooltip placement="top" arrow title="Analytics (A)" TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined sx={{fontSize : "unset"}} className="icon"/></button>
        </Tooltip>
        <Tooltip placement="top" arrow title="More" TransitionComponent={Grow}>
          <button className="action"><MoreHoriz sx={{fontSize : "unset"}} className="icon" /></button>
        </Tooltip>
      </span>
    </span>
  )
};

