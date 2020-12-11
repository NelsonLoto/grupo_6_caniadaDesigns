const { check } = require('express-validator');

module.exports = [
     check('email').isEmail().withMessage('Debés ingresar un email válido'),
     check('password').isLength({min: 8}).withMessage('Debés ingrear una contraseña de 6 caracteres como mínimo y 20 como máximo'),
     check('repassword').isEmpty().withMessage('Tenés que verificar tu contraseña.')
]