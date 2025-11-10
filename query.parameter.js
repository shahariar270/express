const express = require('express');
const app = express();
let products = require('./ecommerse.products');

app.get('/books', (req, res) => {
    const id = parseInt(req.query.id);
    const data = products.find((p) => p.id === id);
    if (data) {
        return res.status(200).json({
            message: 'data founded',
            data,
        })
    }

    return res.status(404).json({
        massage:'not data match founded'
    })
})

module.exports = app;
