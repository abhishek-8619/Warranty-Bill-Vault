const exp=require('express')
const router=exp.Router()
const {postProduct,getProduct}=require('../controllers/product.controllers')
const auth=require('../middleware/auth.middleware')


router.post('/',auth,postProduct)
router.get('/',auth,getProduct)

module.exports=router