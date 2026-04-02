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