const jwt=require('jsonwebtoken')
require('dotenv').config()
const JWT_Secret=process.env.JWT_SecretKey
const jwtMiddleware=(req,res,next)=>{
    const authorization=req.headers.authorization
    if(!authorization){return res.status(401).send({message:"token not found"})}
    const token=req.headers.authorization.split(' ')[1]
    if(!token){res.status(401).json({message:"unauthorized"})}

    try{
        const decoded=jwt.verify(token,JWT_Secret)
        req.userID=decoded
        next()
    }
    catch(err){
        res.status(401).json({message:"unauthorized"})
    }
}

module.exports=jwtMiddleware