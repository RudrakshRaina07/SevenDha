const {OrdersModel} = require("../Models/OrdersModel");
const {PositionsModel} = require("../Models/PositionsModel");

module.exports.getAllOrders = async(req, res) => {
    try{
        const allOrders = await OrdersModel.find({});
        res.json(allOrders);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Error fetching orders"});
    }
};

module.exports.newOrder = async(req, res) => {
    try{
        let newOrder = await OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        })
        
        newOrder.save();
        res.send("Order saved!");
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error saving order"});
    }
};

module.exports.getAllPositions = async(req, res) => {
    try{
        let allPositions = await PositionsModel.find({});
        res.json(allPositions);
    }catch(err){
        console.error(err);
        res.status(500).json({message:"Error fetching positions"});
    }
};

module.exports.addPositions = async(req, res) =>{
    try{
        tempPostions = [
            {
                product: "CNC",
                name: "EVEREADY",
                qty: 2,
                avg: 316.27,
                price: 312.35,
                net: "+0.58%",
                day: "-1.24%",
                isLoss: true,
            },
            {
                product: "CNC",
                name: "JUBLFOOD",
                qty: 1,
                avg: 3124.75,
                price: 3082.65,
                net: "+10.04%",
                day: "-1.35%",
                isLoss: true,
            },
        ];

        await PositionsModel.insertMany(tempPostions);
        res.send("Postions added!");
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error adding positions"});
    }
};