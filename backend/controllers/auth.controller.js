
import userModel from '../models/user.model.js';
import jwt from "jsonwebtoken"
import { config } from "../config/config.js";

async function sendTokenResponse(user, res,message) {

    const token = jwt.sign({
        id: user._id,
    }, config.JWT_SECRET_KEY, {
        expiresIn: "7d"
    })

    res.status(200).json({
        message,
        token,
        user :{
            fullname: user.fullname,
            email: user.email,
            contact: user.contact,
            role: user.role,
        }
    })
}

export async function registerUser(req, res) {
    const {fullname, email, password, contactNo, joinAsSeller} = req.body;
    try {
        const existingUser = await userModel.findOne({
            $or: [
                { email },
                { contactNo }
            ]
        })

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or contactNo already exists" });
        }

        const user = await userModel.create({
            email,
            contactNo,
            password,
            fullname,
            role: joinAsSeller ? 'seller' : 'buyer',
        })

        await sendTokenResponse(user, res, "User registered successfully");

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" });
    }

}

export async function loginUser(req, res) {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User with this email does not exist" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        await sendTokenResponse(user, res, "User logged in successfully");
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" });
    }
}

export const googleCallback = async (req, res) => {
    console.log(req.user)
    const {id, displayName, emails} = req.user;
    const email = emails[0].value;
    let user = await userModel.findOne({ email });
    if (!user) {
        user = await userModel.create({
            email,
            fullname: displayName,
            googleId: id,
        }) 
        
    } 

     const token = jwt.sign({
            id: user._id,
        }, config.JWT_SECRET_KEY, {
            expiresIn: "7d"
        })
        res.cookie('token', token);

        res.redirect('http://localhost:5173/');

}

