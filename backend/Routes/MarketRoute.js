const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/prices", async (req, res) => {
    const { symbols } = req.body;

    if (!symbols || symbols.length === 0)
        return res.status(400).json({ message: "No Symbols Provided" });

    const prices = {};

    // Keep original prices for all symbols as null (will use DB price)
    symbols.forEach(sym => {
        prices[`${sym}:NSE`] = { price: null };
    });

    // Only fetch live price for INFY
    if (symbols.includes("INFY")) {
        const { data } = await axios.get(`https://api.twelvedata.com/price`, {
            params: {
                symbol: "INFY:NSE",
                apikey: process.env.TWELVE_API_KEY,
            },
        });
        console.log("INFY live price:", data.price);
        prices["INFY:NSE"] = { price: data.price ? parseFloat(data.price) : null };
    }

    res.json(prices);
});

module.exports = router;