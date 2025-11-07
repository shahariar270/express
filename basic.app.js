const express = require('express');
const products = require('./ecommerse.products');
const app = express();

app.use(express.json())

app.get('/', (res, req) => {
    req.status(200).json({
        massage: 'sussefully Data render',
        products,
    })
})

module.exports = app;
