const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/area', (req, res) => {
    res.sendFile(__dirname + '/public/area.html')
})

app.post('/area', (req, res) => {
    const { length, width } = req.body;
    let calculateArea = Number(width) * Number(length);
    if (!length || !width) {
        res.status(400).json({
            message: 'Please provide both length and width',
            code: 400,
        })
        return;
    }
    res.status(200).json({
        message: ' your Rectangle Area is',
        calculateArea,
        code: 200,

    })
})

module.exports = app;