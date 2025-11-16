const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('normal posr start')
})

module.exports = app;
