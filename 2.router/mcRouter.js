const router = require('express').Router()
const {getList, addMc, deleteMc} = require('./../3.controller/mcController')



router.get('/getList', getList)
router.post('/addMc', addMc)
router.delete('/deleteMc', deleteMc)



module.exports = router