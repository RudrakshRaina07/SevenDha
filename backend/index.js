require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const marketRoute = require("./Routes/MarketRoute");

const {HoldingsModel} = require("./Models/HoldingsModel");
const {PositionsModel} = require("./Models/PositionsModel");
const {OrdersModel} = require("./Models/OrdersModel");
const {userVerification} = require("./Middlewares/AuthMiddlewares");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: ["http://localhost:3000" ,"http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
app.use(express.json());

app.use(cookieParser());

app.use("/", authRoute);
app.use("/market", marketRoute);

app.get("/allHoldings",userVerification, async(req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions",userVerification, async(req,res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
})

app.get("/allOrders",userVerification, async(req,res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})

app.post("/newOrder",userVerification, async(req, res) => {
  let newOrder = await OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  })

  newOrder.save();
  res.send("Order saved!");
})

app.post("/buy",userVerification, async (req, res) => {
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
});

app.post("/sell",userVerification, async(req,res) => {
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
});

mongoose.connect(url)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
    

app.listen( 3002, () => {
    console.log("App is running on port : 3002")
})
