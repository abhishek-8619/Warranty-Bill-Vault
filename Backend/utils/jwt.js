const jwt=require('jsonwebtoken')
require('dotenv').config()
const JWT_SecretKey=process.env.JWT_SecretKey

const generateToken=(user)=>{
    return jwt.sign({user},JWT_SecretKey,{expiresIn:"20d"})
}

module.exports=generateToken