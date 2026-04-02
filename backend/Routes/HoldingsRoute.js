const {router} = require("express").router();
const {userverfication, userVerification} = require("../Middlewares/AuthMiddlewares");
const {getAllHoldings, buyStock, sellStock} = require("../Controllers/HoldingsController");

router.add("/allHoldings", userVerification, getAllHoldings);
router.post("/buy", userverfication, buyStock);
router.post("/sell", userVerification, seelStock);

module.exports = router;