const jwt=require('jsonwebtoken')
require('dotenv').config()
const JWT_SecretKey=process.env.JWT_SecretKey

const generateToken=(userID)=>{
    return jwt.sign({userID},JWT_SecretKey,{expiresIn:"20d"})
}
module.exports=generateToken