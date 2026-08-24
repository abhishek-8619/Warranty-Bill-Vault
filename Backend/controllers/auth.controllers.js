const user=require('../models/users')
const generateToken=require('../utils/jwt')

const SignupController=async(req,res)=>{
    try{
        const data=req.body;
        const saving=user(data)
        const response=await saving.save()
        const token=await generateToken(response.id)
        res.status(200).send({response:response,token:token})
        console.log("New user joined!!")
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

const LoginController=async (req,res)=>{
    const {email,password}=req.body
    try{
        const email_db=await user.findOne({email:email})
        if(!email_db){return res.status(401).send({message:"Invalid email or pass"})}
        const isPass=await email_db.comparePass(password)
        if(!isPass){
            return res.status(401).send({message:"Wrong password or username"})
        }
        const token=await generateToken(email_db.id)
        res.status(200).send({token:token})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports={SignupController,LoginController}