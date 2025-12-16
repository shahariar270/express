const express = require('express');
const router = express.Router();

router.post('/user', async(req, res) => {
    try {
        const id = Date.now();
        const { name, email, password, dob } = req.body || {};

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'name, email or password is missing'
            });
        }
        const newUser = { id, name, email, dob };
        return res.status(201).json({
            massage: 'new user created successfully',
            data: newUser
        })
    } catch (error) {

    }
})

module.exports = router;
