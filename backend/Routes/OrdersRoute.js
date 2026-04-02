const router  = require("express").router();
const {userVerification} = require("../Middlewares/AuthMiddlewares");
const {getAllOrders, newOrder, getAllPositions, newOrder} = require("../Controllers/OrdersController");

router.get("/allOrders",  userVerification, getAllOrders);
router.post("/newOrder", userVerification, newOrder);
router.get("/allPositions", userVerification, getAllPositions);

module.exports = router;