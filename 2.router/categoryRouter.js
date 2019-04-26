const router = require('express').Router()
const {getCategoryList,addCategory,deleteCategory,editCategory} = require('./../3.controller/categoryController')



router.get('/getCategoryList', getCategoryList)
router.post('/addCategory', addCategory)
router.delete('/deleteCategory/:id', deleteCategory)
router.put('/editCategory/:id', editCategory)




module.exports = router