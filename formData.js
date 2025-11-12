const express = require('express');
const app = express();
let products = require('./ecommerse.products');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.post('/user', (req, res) => {
    const name = req.body.name;
    res.send(`your sended data is ${name}`)
})

module.exports = app;