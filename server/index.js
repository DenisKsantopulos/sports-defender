const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TemplateModel = require('./models/Templates')

const app = express()
app.use(cors())
app.use(express.json())

const hostname = '127.0.0.1';
const port = 3001;

mongoose.connect('mongodb://127.0.0.1:27017/defender');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/getTemplates', (req, res) =>{
    TemplateModel.find()
    .then(templates => res.json(templates))
    .catch(err => res.json(err))
})

app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error' });
});

app.listen(3001, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
})