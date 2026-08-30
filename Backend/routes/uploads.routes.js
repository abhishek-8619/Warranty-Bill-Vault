const exp=require('express')
const upload=require('../middleware/multer.middleware')
const router=exp.Router()
const {UploadFile}=require('../controllers/upload.controllers')


router.post('/:productID',upload.single('file'),UploadFile)

module.exports=router