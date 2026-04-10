const router  = require("express").Router();
const {userVerification} = require("../Middlewares/AuthMiddlewares");
const {getAllOrders, newOrder, getAllPositions, addPositions} = require("../Controllers/OrdersController");

router.get("/allOrders",  userVerification, getAllOrders);
router.post("/newOrder", userVerification, newOrder);
router.get("/allPositions", userVerification, getAllPositions);
router.get("/addPositions", addPositions);

module.exports = router;