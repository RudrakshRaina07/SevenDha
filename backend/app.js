require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./Config/db");
const authRoute = require("./Routes/AuthRoute");
const marketRoute = require("./Routes/MarketRoute");
const holdingsRoute = require("./Routes/HoldingsRoute");
const ordersRoute = require("./Routes/OrdersRoute");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
}));

app.use("/", authRoute);
app.use("/market", marketRoute);
app.use("/", holdingsRoute);
app.use("/", ordersRoute)

connectDB();

module.exports = app;