import React, { useContext, useState } from 'react';
import GeneralContext from './GeneralContext';

const SellActionWindow = ({uid}) => {
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    const context = useContext(GeneralContext);

    const handleSell = async() => {
        try{
            await context.sellStock({
                name: uid,
                qty: Number(qty),
                price: Number(price),
            });

            context.closeBuyWindow();
        } catch(err) {
            alert("Sell Failed");
        }
    };

    const handleCancelClick = () => {
        context.closeBuyWindow();
    };

    return (
       <div className="container" id="buy-window" onClick={(e) => e.stopPropagation()}>
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" onChange={(e)=>setQty(e.target.value)} value={qty}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step="0.05" onChange={(e) => setPrice
                            (e.target.value)} value={price}/>
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required 140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleSell}>Sell</button>
                    <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>  );
};

export default SellActionWindow;