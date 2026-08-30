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

const putProduct=async (req,res)=>{
    try{
        const data=req.body
        const id=req.params.id
        await product.findByIdAndUpdate(id,data)
        res.status(200).send({updated:data})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send("Internal server error")
    }
}

const deleteProduct=async (req,res)=>{
    try{
        const id=req.params.id
        const response=await product.findByIdAndDelete(id)
        res.status(200).send({deleted_product:response})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send("Internal server error")
    }
}

module.exports={postProduct,getProduct,putProduct,deleteProduct}