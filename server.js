import express from "express";
import Connection from "./Connections.js";
import User from "./user.js";
import bodyParser from "body-parser"

let app=express();
app.use(bodyParser.json())
app.get("/",async(req,res)=>{
    let data=await User.find();
    res.send({message:"created",data});
})

app.post('/post',async(req,res)=>{

    let body = req.body;
    try{
        let value = await User.insertMany(body);
        res.status(201).send({message:"data created",value})
    }catch(error){
        console.log(error)
    }
}
)

Connection().then(()=>{
    app.listen(8081,()=>{
        console.log("connected to port")
})
})
