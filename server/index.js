const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TemplateModel = require('./models/Templates')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/defender")

app.get('/getTemplates', (req, res) =>{
    TemplateModel.find()
    .then(templates => res.json(templates))
    .catch(err => res.json(err))
})

app.listen(3001, () =>{
    console.log('Server is running')
})