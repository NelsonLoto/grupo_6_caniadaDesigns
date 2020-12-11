const path = require ('path');
const bcrypt = require ('bcryptjs');
const fs = require ('fs')
const { validationResult } = require('express-validator');


let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

let loginRegister = {
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

                for (let i = 0; i < users.length; i++) {
                 
                    if (users[i].email == req.body.email){
                        if( bcrypt.compareSync(req.body.password, users[i].password)){
                            req.session.usuarioLogueado = req.body.email;

                            if(req.body.remember != 'undefined'){
                                    res.cookie('remember', req.body.email,    {maxAge: 60000000000} )
                            }
                                res.redirect('/')
                            }
                    } else {
                                res.render('templateView', { 
                                    title: 'Caniada - Crear cuenta',
                                    view: '/usuario/login',
                                    bienvenida: `Lo lamentamos ${req.body.email}. Igual podés crear una cuenta`,
                                    error: true
                            })
                        }
                    }
             
            }else {
                res.render('templateView', { 
                    title: 'Caniada - Crear cuenta',
                    view: '/usuario/login',
                    errors: errors.mapped(),
                    old: req.body,
                    bienvenida: 'Intentá nuevamente'
                })
                console.log(errors.mapped())
            }
        
    },
    register: function (req, res) {
    res.render('templateView', { 
            title: 'Caniada - Crear cuenta',
            view: '/usuario/register'
        })
    },
    registerPost: function(req, res) {

        // NOdemon se reinicia al hacer el fr.writeFileSync. No se puede loguear al usuario recien registrado. NO persiste la session. 
        
        let errors = validationResult(req)
        if(errors.isEmpty()){

            let newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename || " ",
            }
            users.push(newUser);
            
            res.cookie('loginCookie', newUser.email, {maxAge: 60000} )
            req.session.newUser = [newUser.nombre,newUser.email,newUser.avatar]

            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(users, null,4));
            
            console.log(req.session.newUser)
            
            return res.redirect('/usuarios/login')

        } else {
            res.render('templateView', { 
                title: 'Caniada - Crear cuenta',
                view: '/usuario/register',
                errors: errors.mapped(),
                old: req.body
            })
            console.log(errors.mapped())
        }
    }
}

module.exports = loginRegister