const { check } = require('express-validator');
const db = require ('../database/models')

module.exports = [
     check('nombre').notEmpty().withMessage('Campo requerido'),
     check('apellido').notEmpty().withMessage('Campo requerido'),
     check('email').isEmail().withMessage('Debés ingresar un email válido').custom(async (email, {req})=> {
                                                                                let emailExists = await db.Usuario.findOne({
                                                                                     where : {
                                                                                          email : req.body.email
                                                                                     }
                                                                                })
                                                                                if (emailExists != null){
                                                                                     throw new Error ('El email ingresado ya se encuentra registrado')
                                                                                }
                                                                           }),
     check('password').isLength({min: 6}).withMessage('6 caracteres como mínimo y 20 como máximo'),
     check('repassword').notEmpty().withMessage('Tenés que verificar tu contraseña.').custom(async (repassword, {req}) => { 
                                                                                          let password = req.body.password
                                                                                          if (password !== repassword){
                                                                                               throw new Error ('Las contraseñas ingresadas deben coincidir')
                                                                                          }
                                                                                     }),
     check('legal').notEmpty().withMessage('Debés leer y aceptar nuestros términos y condiciones.')
]