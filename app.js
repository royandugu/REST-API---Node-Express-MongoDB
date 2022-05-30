//Modules
const express=require("express");
const dbConnector=require("./dbConnector");
const router=require("./routing");
const errorHandler=require("./error_handlers/errorParser");
require("dotenv").config();


const app=express();
//Middlewares
app.use(express.json());
app.use("/api/v1/tasks",router);
app.use((req,res)=>res.status(404).send("The route you are trying to find does not exist"));
app.use(errorHandler);


const start=async ()=>{
    try{
        await dbConnector(process.env.MONGO_URI);
        app.listen(5000,()=>console.log("Api is listening to port 5000"));
    }
    catch(err){
        errorHandler(err);
    }
}
start();
