const { validationResult } = require('express-validator');

const validation_request = (req, res, next) => {
    const errors = validationResult(res);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array()
        });
    }

    next();
}

module.exports = validation_request;