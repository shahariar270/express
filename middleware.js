const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.json());

//logger for use debugging
const logger = (req, res, next) => {
    console.log(`${req.method} & ${req.url}`);
    next()
}
app.use(logger)

//authentication middleware
const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({
            message: 'authorization token'
        })
    }
    next();
}

app.get('/profile', auth, (req, res) => {
    res.status(200).json({
        message: 'data fetch successfully'
    })
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.status(201).json({
        data: data,
        message: 'data created'
    })
})

app.listen(port, () => {
    console.log('run server in port 8080');
})