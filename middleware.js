const express = require('express');
const path = require('path');
const app = express();

app.get('/middle', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/middle.html'));
})

module.exports = app;
