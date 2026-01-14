const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
const port = 3000
app.use(express.urlencoded({ extended: true }));

let user = {
    name: 'shahariar',
    password: '123456',
    id: 1,
    user_name: 'shahriar270'
}

const jwt_sec = 'hello_bangladesh'

app.post('/login', (req, res) => {
    const { user_name, password } = req.body;

    if (user_name !== user.user_name || password !== user.password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user.id, user_name: user.user_name },
        jwt_sec,
        { expiresIn: "1h" }
    );

    res.status(200).json({ token })

})

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader.split(" ")[1]
    
    jwt.verify(token, jwt_sec, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
}

app.get('/profile', verifyToken, (req, res) => {
    res.json({
        message: "Profile data",
        user: req.user
    });
});



app.listen(port, () => {
    console.log('Server is running on', port);
});