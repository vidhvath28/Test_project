import express from "express";
import Connection from "./Connections.js";

let app=express();
app.get("/",(req,res)=>{
    res.send("Working...")
})

Connection().then(()=>{
    app.listen(8081,()=>{
        console.log("connected to port")
})
})
