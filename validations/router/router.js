const express = require('express');
const RegisterSchema = require('../config/register_config');
const router = express.Router();
const validation_request = require('../errorHandle/validate_request');
const { register_validator } = require('../errorHandle/auth_validator/register_validator');
const { validationResult } = require('express-validator');

router.post('/register',
    register_validator,
    validation_request,
    async (req, res) => {
        try {
            const id = Date.now();
            const { name, email, password, dob } = req.body;

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
