const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({

    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    model:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        enum: [
            "electronics",
            "home-appliances",
            "furniture",
            "vehicles",
            "tools",
            "other"]
    },
    serial_number:{
        type:String,
        required:true,
        trim:true
    },
    purchase_date:{
        type:Date,
        required:true
    },
    purchase_price:{
        type:Number,
        required:true
    },
    warranty_start_date:{
        type:Date,
        required:true
    },
    warranty_end_date:{
        type:Date,
        required:true
    }
},
    {
        timestamps:true
    }
)

const productModel=mongoose.model('products',ProductSchema)

module.exports=productModel