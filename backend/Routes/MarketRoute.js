const router = express.Router();
const {getPrices} = require("../Controllers/MarketController");

router.post("/prices", getPrices);

module.exports = router;