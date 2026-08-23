const express=require('express')
const app=express();
require('dotenv').config()
const db=require('./config/db')

const PORT=process.env.PORT




app.listen(PORT ||3000,()=>{
    console.log('server is running')
})