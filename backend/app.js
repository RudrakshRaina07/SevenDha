require("dotenv").config()
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./Config/db");
const authRoute = require("./Routes/AuthRoute");
const marketRoute = require("./Routes/MarketRoute");
const holdingsRoute = require("./Routes/HoldingsRoute");
const ordersRoute = require("./Routes/OrdersRoute");
const { useCallback } = require("react");

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    process.env.FRONTEND_URL,
    process.env.DASHBOARD_URL,
];

app.use(cors({
    origin: function(origin, callback){
        if(!origin || allowedOrigins.includes(origin)){
           callback(null, true); 
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    },

    methods: ["GET", "POST", "PUT", 'DELETE'],
    credentials : true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);
app.use("/market", marketRoute);
app.use("/", holdingsRoute);
app.use("/", ordersRoute)

connectDB();

module.exports = app;