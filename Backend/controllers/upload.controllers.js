const bill = require("../models/bill")

const UploadFile=async (req,res)=>{
    try{
        const data=await bill.create({
            productID:req.params.productID,
            file:{
                originalname:req.file.originalname,
                filename:req.file.filename,
                mimetype:req.file.mimetype,
                size:req.file.size,
                path:req.file.path
            }
        })

        res.status(200).send(data)
        console.log(data)
    }
    catch(err){
        console.error(err.message)
        res.status("Internal server error")
    }
}

module.exports={UploadFile}