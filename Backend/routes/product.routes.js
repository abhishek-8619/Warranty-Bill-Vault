const exp=require('express')
const router=exp.Router()
const {postProduct,getProduct, putProduct, deleteProduct}=require('../controllers/product.controllers')


router.post('/',postProduct)
router.get('/',getProduct)
router.put('/:id',putProduct)
router.delete('/:id',deleteProduct)

module.exports=router