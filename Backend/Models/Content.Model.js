const mongoose=require("mongoose");
const contentSchema=mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    link:{type:String,required:true},
    userId:{type:String,required:true}
})
const ContentModel=mongoose.model("content",contentSchema);
module.exports={
    ContentModel
}