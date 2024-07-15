const express = require('express')
const cors = require('cors')
const router = require('./routes/routes')
const connectDB = require('./configs/db');

const app = express()
app.use(cors())
app.use(express.json())

const hostname = '127.0.0.1';
const port = 3001;

connectDB();

app.use("/", router);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error' });
});

app.listen(3001, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
})