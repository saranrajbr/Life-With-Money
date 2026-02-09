import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import mongoose from "mongoose";

const cursor=async()=>{
    console.log(process.env.MONGO_URI)
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected")

    }catch(err){
        console.error(err);
        process.exit(1)
    }
};


export default cursor;