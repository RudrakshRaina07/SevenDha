const router = require("express").Router();
const {userVerification} = require("../Middlewares/AuthMiddlewares");
const {getAllHoldings, buyStock, sellStock} = require("../Controllers/HoldingsController");

router.get("/allHoldings", userVerification, getAllHoldings);
router.post("/buy", userVerification, buyStock);
router.post("/sell", userVerification, sellStock);

module.exports = router;