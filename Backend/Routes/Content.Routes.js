const express = require("express");
const contentRouter = express.Router();
const {ContentModel}=require("../Models/Content.Model");
contentRouter.get("/",async(req,res,next)=>{
    const {userId}=req.body;
    try{
        let data=await ContentModel.find({userId});
        res.send(data);
    }catch(err){
        res.send({ "message": err })
    }
})
contentRouter.post("/add",async (req,res)=>{
    const {title,description,link,userId}=req.body;
    try{
        let content=new ContentModel({title,description,link,userId});
        await content.save();
        res.send({"message":"Content posted successfully"})
    }catch(err){
        res.send({ "message": err })
    }
})
module.exports={contentRouter}