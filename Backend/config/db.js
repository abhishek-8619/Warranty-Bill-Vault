const mongoose=require('mongoose');
require('dotenv').config();

const MongoURI=process.env.MongoURI;

const ConnectDB=async ()=>{
    try{
        const conn=await mongoose.connect(MongoURI);
        console.log("MongoDB connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports=ConnectDB()
