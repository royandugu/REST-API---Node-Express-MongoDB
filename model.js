const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name feild cannot be empty"],
        trim:true
    },
    hasCompleted:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("TM-model",schema);