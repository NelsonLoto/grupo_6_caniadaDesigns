const { check } = require('express-validator');

module.exports = [
     check('email').isEmail().withMessage('Debés ingresar un email válido'),
     check('password').notEmpty().withMessage('Campo requerido')
]