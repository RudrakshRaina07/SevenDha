const User = require("../Models/UserModel")
const { createSecretToken} = require("../Utils/SecretToken")
const bcrypt = require("bcryptjs");

module.exports.Signup = async(req, res) => {
    try{
        const {email, password, username, createdAt} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.json({message : "User already exists"})
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, password, username, createdAt});
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            httpOnly: true,
            path: "/"
        });

        res 
            .status(201)
            .json({message : "User signed in successfully", success: true, user});
    }catch(error){
        console.error(error);
    }
};

module.exports.Login = async(req, res) => {
    try{
        const {email, password }= req.body;

        if(!email || !password){
            return res.json({message :"All fields are required"});
        }

        const user = await User.findOne({email});

        if(!user){
            console.log("User NOT found");
            return res.json({message: "Incorrect email or password"});
        }

        const auth = await bcrypt.compare(password, user.password);

        if(!auth){
            return res.json({message: "Incorrect email or password"});
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/"
        });
        res.status(200).json({message : "User logged in successfully", success: true});
    }catch(error){
        console.error(error);
    }
}

module.exports.getUser = async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select("-password");
        if(!user){
            return res.status(404).json({message : "User not found"});
        }

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({message : "Error fetching user"});
    }
}

module.exports.Logout = async(req, res) => {
    try{
        res.cookie("token", "", {
            httpOnly : true,
            sameSite: process.env.NODE_ENV === "produciton" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            path: "/"
        });

        res.status(200).json({message :"Logged out successfully", success: true});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Logout Failed"});
    }
}