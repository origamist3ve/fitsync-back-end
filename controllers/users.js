import "dotenv/config";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try{
        const users = await User.find({}, "username")

        res.json(users)
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
}

export const getUser = async (req, res) => {
    try {
        if (req.user._id !== req.params.userId) {
            return res.status(403).json({err: "Not Authorized"})
        }
        const user = await User.findById(req.params.userId)

        if (!user) {
            return res.status(403).json({err: "User Not Found"})
        }

        res.json({user})
    }
    catch(err){
        res.status(500).json({err: err.message})
    }

    export const signup = async (req, res) => {
        try{
            const userInDatabase = await User.findOne({username: req.body.username})
            if (userInDatabase) {
                return res.status(400).json({err: "Choose a different username"})
            }
            const user = await User.create( {
                username: req.body.username,
                hashedPassword: bcrypt.hashSync(
                    req.body.password,
                    Number(process.env.SALT_ROUNDS)
                ),
            })
            const payload = {username: user.username, _id: user._id}

            const token = jwt.sign({payload}, process.env.JWT_SECRET)
            res.status(201).json({token})
        }
        catch(err){
            res.status(500).json({error})
        }
    }
}