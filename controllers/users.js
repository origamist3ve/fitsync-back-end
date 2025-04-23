import "dotenv/config";
import User from "../models/user.js";
import Profile from "../models/profile.js";
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
    } catch (err) {
        res.status(500).json({err: err.message})
    }
}

export const signUp = async (req, res) => {
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

        // TODO create a profile and put it on the new user

        const payload = {username: user.username, _id: user._id}

        const token = jwt.sign({payload}, process.env.JWT_SECRET)

        res.status(201).json({token})
    }
    catch(err){
        res.status(500).json({err})
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) {
            return res.status(403).json({err: "Invalid credentials"})
        }
        const isPasswordCorret = bcrypt.compareSync(
            req.body.password,
            user.hashedPassword
        )
        if (!isPasswordCorret) {
            return res.status(403).json({err: "Invalid Credentials"})
        }

        const payload = {username: user.username, _id: user._id}
        const token = jwt.sign({payload}, process.env.JWT_SECRET)

        res.status(201).json({token})
        console.log("wlecome")
    }
    catch(err){
        res.status(500).json({err: err.message})

    }
}

export const createProfile = async (req, res) => {
    try{
        const userId = req.user._id
        const {name, gender, age, weight, height, experienceLevel} = req.body

        const newProfile = new Profile({
            user: userId,
            name,
            gender,
            age,
            weight,
            height,
            experienceLevel,
        })
        const savedProfile = await newProfile.save()
        await User.findByIdAndUpdate(userId, {
            profile: savedProfile._id,
        })
        res.status(201).json(savedProfile);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ message: "Failed to create profile." });
    }
}