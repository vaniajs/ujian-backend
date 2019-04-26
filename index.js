const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const movieRouter = require('./2.router/movieRouter')
const categoryRouter = require('./2.router/categoryRouter')
const mcRouter = require('./2.router/mcRouter')

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('<h1>API MOVIE - UJIAN BACK END</h1>')
})

app.use('/movie',movieRouter)
app.use('/category', categoryRouter)
app.use('/mc', mcRouter)

app.listen(port,()=>console.log('Aktif di port '+port))