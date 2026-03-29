const jwt = require("jsonwebtoken");

module.exports.userVerification = async(req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: "Authentication required"});
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(403).json({message : "Invalid Token"});
    }
};