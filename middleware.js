const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.json());

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({
            message: 'unauthorization token'
        })
    }
    next();
}

app.get('/profile', auth, (req, res) => {
    res.status(200).json({
        message: 'data fetch successfully'
    })
})

app.listen(port, () => {
    console.log('run server in port 8080');
})