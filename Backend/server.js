const express=require('express')
const body_parser=require('body-parser')
const app=express();
require('dotenv').config()
const db=require('./config/db')
app.use(body_parser.json())
const authRoute=require('./routes/auth.routes')
const productRoute=require('./routes/product.routes')
const PORT=process.env.PORT

app.use('/auth',authRoute)
app.use('/product',productRoute)
app.listen(PORT ||3000,()=>{
    console.log('server is running')
})

