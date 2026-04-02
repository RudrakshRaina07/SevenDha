const {HoldingsModel} = require("../Models/HoldingsModel");
const {OrdersModel} = require("../Models/OrdersModel");

module.exports.getAllHoldings = async(req, res) => {
    try{
        let allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    }catch(err){
        console.error(error);
        res.status(500).json({message: "Error fetching holdings"});
    }
};

module.exports.buyStock = async(req, res) => {
    try{
        const { name, qty, price } = req.body;

        let holding = await HoldingsModel.findOne({name});

        if(holding) {
            const totalQty = holding.qty + qty;
            const newAvg = (holding.qty * holding.avg + qty * price)/totalQty;

            holding.qty = totalQty;
            holding.avg = Number(newAvg.toFixed(2));
            holding.price = price;

            await holding.save();
            return res.json({holding});
        }

        const newHolding = await HoldingsModel.create({
            name,
            qty,
            avg: price,     
            price,          
            net: "+0.00%",
            day: "+0.00%",
            isLoss: false,
        });

        res.json({holding : newHolding});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Error buying stock"});
    }
};

module.exports.sellStock = async(req, res) => {
    try{
        const {name, qty, price} = req.body;

        let holding = await HoldingsModel.findOne({name});

        if(!holding || holding.qty < qty){
            return res.status(400).json({message : "Insufficient Quantity"});
        }

        holding.qty -= qty;

        if(holding.qty == 0){
            await HoldingsModel.deleteOne({name});
        }else{
            await holding.save();
        }

        await OrdersModel.create({
            name,
            qty,
            price,
            mode: "SELL",
        });

        res.json({success : true});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error in selling stock"});
    }
};