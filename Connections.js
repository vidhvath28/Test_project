import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function Connection(){
    try{
        await mongoose.connect(process.env.MY_API)
        console.log("connected to mongoose")
    }catch (error){
        console.log(error)
    }
}
  