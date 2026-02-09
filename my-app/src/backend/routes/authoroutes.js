import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/user.js";

const router=express.Router();
const client=new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID)


router.post("/register",async (req,res)=>{
    const {email,password}=req.body;
    const exists=await User.findOne({email});
    if(exists) return res.status(400).json({msg:"user exist"});
    const hashed=await bcrypt.hash(password,9);
    const user=await User.create({email,password:hashed});
    res.json({msg:"Registered"});
});

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return res.status(400).json({msg:"Error"});
    const pass=await bcrypt.compare(password,user.password);
    if(!pass) return res.status(400).json({msg:"Error"});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({token});
});


router.post("/google",async(req,res)=>{
    const {token}=req.body;
    const ticket=await client.verifyIdToken({
        idToken:token,
        audience:process.env.VITE_GOOGLE_CLIENT_ID
    });

    const {email,sub}=ticket.getPayload();
    let user=await User.findOne({email});
    if(!user){
        user=await User.create({email,googleid:sub});
    }

    const jwttoken=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"8d"});
    res.json({token:jwttoken});
});

export default router;