const model=require("./model");
const wrapper=require("./error_handlers/wrapper");
const getTask=wrapper(async (req,res,next)=>{
    const data=await model.find({});
    res.status(200).json({tasks:data});
})
const postTask=wrapper(async (req,res,next)=>{
    const newData=await model.create(req.body);
    res.status(201).json({newData});
})
const getTaskSingle=wrapper(async (req,res,next)=>{
    const {id:taskID}=req.params;
    const singleData=await model.findOne({taskID});
    res.status(200).json({singleData});
})
const updateTask=wrapper(async (req,res,next)=>{
    const {id:taskID}=req.params;
    const newData=await model.findOneAndUpdate({taskID},req.body,{runValidators:true,new:true});
    res.status(200).json({newData});
})
const deleteTask=wrapper(async (req,res,next)=>{
    const {id:taskID}=req.params;
    const newData=await model.findOneAndDelete({taskID});
    res.status(200).json({newData});
})
module.exports={getTask,postTask,getTaskSingle,updateTask,deleteTask};