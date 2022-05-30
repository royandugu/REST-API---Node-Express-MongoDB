const {Custom}=require("./customError");
const errParsing=(err,req,res,next)=>{
    if(err instanceof Custom) res.status(err.statusCode).json({msg:err.msg});
    else res.status(404).json({errDetails:err});
}
module.exports=errParsing;