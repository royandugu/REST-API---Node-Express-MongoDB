class Custom extends Error{
    constructor(msg,statusCode){
        super(msg);
        this.statusCode=statusCode;
    }
}
const customErrCreator=(msg,statusCode)=>{
    return new Custom(msg,statusCode);
}
module.exports={Custom,customErrCreator};