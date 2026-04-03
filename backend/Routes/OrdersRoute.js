const router  = require("express").Router();
const {userVerification} = require("../Middlewares/AuthMiddlewares");
const {getAllOrders, newOrder, getAllPositions} = require("../Controllers/OrdersController");

router.get("/allOrders",  userVerification, getAllOrders);
router.post("/newOrder", userVerification, newOrder);
router.get("/allPositions", userVerification, getAllPositions);

module.exports = router;