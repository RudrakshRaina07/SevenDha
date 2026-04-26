const { Signup, Login, getUser, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddlewares");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);
router.get("/getUser", userVerification, getUser);
router.post("/logout", Logout);

module.exports = router;