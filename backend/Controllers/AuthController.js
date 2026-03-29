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
            secure: false,
            sameSite: "lax",
            httpOnly: true,
            path: "/"
        });

        console.log("Original password:", password);
        // console.log("Hashed password:", hashedPassword);
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

        console.log("Login email:", email);
        console.log("Login password:", password);
        if(!email || !password){
            return res.json({message :"All fields are required"});
        }

        const user = await User.findOne({email});

         console.log("User from DB:", user);
        if(!user){
            console.log("User NOT found");
            return res.json({message: "Incorrect email or password"});
        }

        const auth = await bcrypt.compare(password, user.password);

        console.log("Password match:", auth);
        if(!auth){
            return res.json({message: "Incorrect email or password"});
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            sameSite: "lax",
            httpOnly: true,
            secure: false,
            path: "/"
        });
        res.status(200).json({message : "User logged in successfully", success: true});
    }catch(error){
        console.error(error);
    }
}