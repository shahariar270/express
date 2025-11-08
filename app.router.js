const express = require('express');
const products = require('./ecommerse.products');
const app = express();

app.route('/books')
    .get((req, res) => {
        res.status(200).json({
            massage:'fetch all data',
            products,
        })

    })


module.exports = app;
