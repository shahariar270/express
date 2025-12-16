const express = require('express');
const RegisterSchema = require('../config/register_config');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const id = Date.now();
        const { name, email, password, dob } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'name, email or password is missing'
            });
        }
        const newUser = { id, name, email, password, dob };
        const user = await RegisterSchema.create(newUser)
        return res.status(201).json({
            massage: 'new user created successfully',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;
