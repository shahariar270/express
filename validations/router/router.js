const express = require('express');
const router = express.Router();

router.post('/user', (req, res) => {
    try {
        const id = Date.name();
        const { name, email, password, dob } = req.body;
        if (!name && !email, !password) {
            res.status(400).json({
                massage: `missing some payload`
            })
        }
        const newUser = { id, name, email, dob };
        res.status(201).json({
            massage: 'new user created successfully',
            data: newUser
        })

    } catch (error) {
        console.log(error);
    }
})
