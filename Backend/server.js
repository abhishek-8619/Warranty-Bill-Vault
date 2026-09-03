const express=require('express')
const body_parser=require('body-parser')
const app=express();
const cors=require('cors')
app.use(cors())
require('dotenv').config()
const db=require('./config/db')
app.use(body_parser.json())
const authRoute=require('./routes/auth.routes')
const productRoute=require('./routes/product.routes')
const auth=require('./middleware/auth.middleware')
const PORT=process.env.PORT
const uploadRoute=require('./routes/uploads.routes')
app.get('/',(req,res)=>{res.status(200).send("Welcome to Warranty & Bill Vault")})
app.use('/auth',authRoute)
app.use('/product',auth,productRoute)
app.use('/upload',uploadRoute)
app.listen(PORT ||3000,()=>{
    console.log('server is running')
})

