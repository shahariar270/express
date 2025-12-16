const express = require('express');
const RegisterSchema = require('../config/register_config');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/register',
    body('name').trim().notEmpty().withMessage('Name is require'),
    body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: errors.array()
            });
        }
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
            if (error.code === 11000) {
                return res.status(409).json({
                    message: 'Email already exists'
                });
            }
            return res.status(500).json({
                message: error.message
            });
        }
    })

module.exports = router;
