const express=require('express')
const router=express.Router()
const {SignupController,LoginController}=require('../controllers/auth.controllers')

router.post('/signup',SignupController)

router.post('/login',LoginController)

module.exports=router