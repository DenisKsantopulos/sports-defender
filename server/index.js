const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const ArticleModel = require('./models/articles')

const app = express()
app.use(cors())
app.use(express.json)

mongoose.connect("mongodb://127.0.0.1:27017/defender")

const hostname = '127.0.0.1';
const port = 3000;

app.get('/getArticles', (res, req) =>{
    ArticleModel.find
    .then(example => res.json(example))
    .catch(err => res.json(err))
})

app.listen(port, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
})