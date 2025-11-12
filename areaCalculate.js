const express = require('express');
const app = express();
let products = require('./ecommerse.products');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/area', (req, res) => {
    res.sendFile(__dirname + '/public/area.html')
})

app.post('/area', (req, res) => {
    const length = req.body.length;
    const width = req.body.width;
    let calculateArea = width * length;
    res.status(200).json({
        message: ' your Rectangle Area is',
        calculateArea,

    })
})

module.exports = app;