import React, {useEffect, useState} from 'react';
import SellActionWindow from './SellActionWindow';
import BuyActionWindow from './BuyActionWindow';
import axios from 'axios';

axios.defaults.withCredentials = true;


const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [holdings, setHoldings] = useState([]);
    const [orders, setOrders] = useState([]);
    const [mode, setMode] = useState(null);
    const [priceLoading, setPriceLoading] = useState(false);

    const fetchHoldings = async() =>{
        const res = await axios.get("http://localhost:3002/allHoldings", 
            { withCredentials: true }
        );
        setHoldings(res.data);
    };

    const fetchOrders = async() => {
        const res = await axios.get("http://localhost:3002/allOrders",
            { withCredentials: true }
        );
        setOrders(res.data);
    };

    const updatedPrice = async() => {
        console.log("Running price update");
        setPriceLoading(true);
        
        try{
            const symbols = holdings.map(stock => stock.name);

            const res = await axios.post(
                "http://localhost:3002/market/prices",
                {symbols},
                {withCredentials: true}
            );
            console.log("BATCH RESPONSE:", res.data);
            const updated = holdings.map(stock => ({
                ...stock,
                price: parseFloat(res.data[`${stock.name}:NSE`]?.price) || stock.price
            }))
                
            setHoldings(updated);
        }catch(error){
            console.error("Price updat failed:", error);
        }finally{
            setPriceLoading(false);
        }
    }

    useEffect(() => {
        fetchHoldings();
        fetchOrders();
    },[]);

    useEffect(() => {
        if(holdings.length === 0) return;

        updatedPrice();
        const interval = setInterval(updatedPrice, 60000);

        return () => clearInterval(interval);
    },[holdings.length]);

    const handleOpenBuyWindow = (uid) => {
        setMode("BUY")
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleOpenSellWindow = (uid) => {
        setMode("SELL")
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    const buyStock = async({name, qty, price}) => {;
        await axios.post("http://localhost:3002/buy", {name, qty, price}, 
            { withCredentials: true }
        );

        await axios.post("http://localhost:3002/newOrder", {
            name,
            qty,
            price,
            mode: "BUY",
        },
        { withCredentials: true }
    );

        await fetchHoldings();
        await fetchOrders();
    };

    const sellStock = async({name, qty, price}) => {
        await axios.post("http://localhost:3002/sell",{
            name,
            qty,
            price,
        },
        { withCredentials: true }
    );

        await fetchHoldings();
        await fetchOrders();
    };

    return (
        <GeneralContext.Provider
            value={{
                holdings,
                orders,
                buyStock,
                sellStock,
                isBuyWindowOpen,
                priceLoading,
                openBuyWindow: handleOpenBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeBuyWindow: handleCloseBuyWindow,
            }}
        >
            {props.children} 
            {isBuyWindowOpen && <div className="modal-backdrop" onClick={handleCloseBuyWindow} />}
            {isBuyWindowOpen && mode === "SELL" && <SellActionWindow uid={selectedStockUID} />}
            {isBuyWindowOpen && mode ==="BUY" && <BuyActionWindow uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;