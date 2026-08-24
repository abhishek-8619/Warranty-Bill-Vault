const product=require('../models/product')

const postProduct=async(req,res)=>{
    try{
        const userID=req.userID.userID;
        const data=await product.create({
            ...req.body,
            userID:userID
        })
        const response=await data.save()
        res.status(200).send(response)
    }
    catch(err){
        res.status(500).send("Internal server error")
        console.error(err.message)
    }
}

const getProduct=async (req,res)=>{
    try{
        const userID=req.userID.userID
        const fetch_data=await product.find({userID:userID})
        res.status(200).send(fetch_data)
    }
    catch(err){
        res.status(500).send({error:"Internal server error"})
        console.error(err.message)
    }
}

module.exports={postProduct,getProduct}