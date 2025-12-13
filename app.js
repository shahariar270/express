require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const { default: chalk } = require('chalk');
const app = require('./basic.app');
const morgan = require('morgan');
const products = require('./ecommerse.products');

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).json({
        massage: 'sussesfully Data render',
        products,
    })
})


app.listen(port, () => {
    console.log(chalk.blue(`server is running in http://localhost:${port}`));
})
