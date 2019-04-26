const router = require('express').Router()
const {getMovieList,deleteMovie, editMovie, addMovie} = require('./../3.controller/movieController')



router.get('/getMovieList', getMovieList)
router.delete('/delete/:id', deleteMovie)
router.put('/edit/:id', editMovie)
router.post('/addMovie', addMovie)



module.exports = router