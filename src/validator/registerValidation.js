const { check } = require('express-validator');

module.exports = [
     check('nombre').notEmpty().withMessage('Campo requerido'),
     check('apellido').notEmpty().withMessage('Campo requerido'),
     check('email').isEmail().withMessage('Debés ingresar un email válido'),
     check('password').isLength({min: 6}).withMessage('6 caracteres como mínimo y 20 como máximo'),
     check('repassword').notEmpty().withMessage('Tenés que verificar tu contraseña.'),
     check('legal').notEmpty().withMessage('Debés leer y aceptar nuestros términos y condiciones.')
]