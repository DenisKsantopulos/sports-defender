const express = require('express');
const router = express.Router();

const getErr = (req, res) => {
    res.status(404).send({ message: 'Not Found' });
};

module.exports = { getErr };