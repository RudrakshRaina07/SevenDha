import React, {useState} from 'react';

import GeneralContext from "./GeneralContext";
import { useContext } from "react";

import axios from "axios";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const context = useContext(GeneralContext);

    const handleCancelClick = () => {
        context.closeBuyWindow();
    };
    const handleBuyClick = async () => {
        // context.openBuyWindow(uid);
        try {
        await context.buyStock({
            name: uid,
            qty: Number(stockQuantity),
            price: Number(stockPrice),
        });

        context.closeBuyWindow();
        } catch (err) {
            console.error("Buy Falied", err);
        }
    };

    return (
        <div className="container" id="buy-window" onClick={(e) => e.stopPropagation()}>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice}/>
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required 140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;