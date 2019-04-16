const { check } = require('express-validator/check');

const submitReport = [check('email').optional().isEmail(), check('message').exists().isString().isLength({ max: 2048 })];

module.exports.submitReport = submitReport;
