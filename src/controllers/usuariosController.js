const path = require ('path');
const bcrypt = require ('bcryptjs');
const fs = require ('fs')
const { validationResult } = require('express-validator');
const { toUnicode } = require('punycode');
const db = require('../database/models');

let usuarios = {
    login: function (req, res) {
        console.log(req.session.newUser)
        res.render('templateView',  { 
            title: 'Caniada - Login',
            view: '/usuario/login',
            bienvenida: undefined
        })
    },
    loginPost: function(req, res){
            let errors = validationResult(req)
            if(errors.isEmpty()){
                db.Usuario.findOne({
                    where : {
                        email : req.body.email
                    }
                })
                    .then (function(usuario){
                        if (usuario == null){
                            return res.render('templateView', { 
                                            title: 'Caniada - Iniciar sesión',
                                            view: '/usuario/login',
                                            bienvenida: `Parece que ${req.body.email} o la constraseña no son correctos. Si todavía no tenés una cuenta, podés crear una`,
                                            error: true,
                                            })
                        }
                        else if (usuario.email == req.body.email && bcrypt.compareSync(req.body.password, usuario.password) ){
                            req.session.user = usuario
                            if (req.body.remember != undefined) {
                                res.cookie('remember', usuario.email, { maxAge: 600000000 });
                            }
                            res.redirect('/')
                        }
                        else {res.render('templateView', { 
                                    title: 'Caniada - Iniciar sesión',
                                    view: '/usuario/login',
                                    errors: errors.mapped(),
                                    datosYaCargados: req.body,//en esta variable se guarda todo lo que llega del login que intentó hacer el usuario pero fue erróneo
                                    error: false,
                                    bienvenida: 'No ingresaste datos válidos. Intentalo nuevamente, o crea una nueva cuenta '
                                })}
                    })
            }
        
    },
    logout: function (req, res) {
        //copiado de stackOverFlow literal
        console.log(req.cookies)
        cookie = req.cookies;
       for (var prop in cookie) {
           if (!cookie.hasOwnProperty(prop)) {
               continue;
           }    
           res.cookie(prop, '', {expires: new Date(0)});
       }
       res.redirect('/');
    },
    register: function (req, res) {
    res.render('templateView', { 
            title: 'Caniada - Crear cuenta',
            view: '/usuario/register'
        })
    },
    registerPost: async function(req, res) {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            
            if(req.file == undefined){
                req.file = {filename : "default@caniada.com.svg"};
            };//si no hay una imagen subida, multer no crea el req.file. Se asigna en esta instancia el valor por defecto en caso de que no se cargue una imagen al crear la cuenta. 
            let usuario = await db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                id_rol: 1
            });
            req.session.user = usuario;
            if (req.body.remember != undefined) {
                res.cookie('remember', usuario.email, { maxAge: 600000000 });
            }
            res.redirect('/')
        } else {
            res.render('templateView', { 
                title: 'Caniada - Crear cuenta',
                view: '/usuario/register',
                errors: errors.mapped(),
                datosYaCargados: req.body
            })
            console.log(errors.mapped())
        }},
    users: function (req, res) {
        res.render('templateAdmin', { 
                title: 'Admin',
                view: '/usuariosAdmin/listadoUsuarios',
                users
            })
        }
    }
module.exports = usuarios