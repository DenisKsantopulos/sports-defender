const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const ArticleModel = require('./models/articles')

const app = express()
app.use(cors())
app.use(express.json)

mongoose.connect("mongodb://localhost:27017/example")

app.get('/getArticles', (res, req) =>{
    ArticleModel.find
    .then(example => res.json(example))
    .catch(err => res.json(err))
})

app.listen(3000, () =>{
    console.log('Server is running')
})