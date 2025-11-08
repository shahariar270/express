const express = require('express');
let products = require('./ecommerse.products');
const app = express();

app.route('/books')
    .get((req, res) => {
        res.status(200).json({
            message: 'fetch all data',
            products,
        })
    })
    .post((req, res) => {
        const updateProduct = req.body;       
     products = { ...products, ...updateProduct }        
        res.status(201).json({
            message: 'data added success',
            products,
        })

    })


module.exports = app;
