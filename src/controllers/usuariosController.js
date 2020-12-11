const path = require ('path');
const bcrypt = require ('bcryptjs');
const fs = require ('fs')
const { validationResult } = require('express-validator')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

let loginRegister = {
    login: function (req, res) {
        res.render('templateView',  { 
            title: 'Caniada - Login',
            view: '/usuario/login',
            bienvenida: undefined
        })
    },
    loginPost: function(req, res){
        res.redirect('/')
    },
    register: function (req, res) {
    res.render('templateView', { 
            title: 'Caniada - Crear cuenta',
            view: '/usuario/register'
        })
    },
    registerPost: function(req, res) {
        let errors = validationResult(req)
        if(errors.isEmpty()){

            let newUser = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename
            }
            console.log(req.file);
            users.push(newUser);

            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.  stringify(users, null,4));
            res.render('templateView', { 
                title: 'Caniada - Crear cuenta',
                view: '/usuario/login',
                bienvenida: `Bienvenido/a ${newUser.nombre}. Podrías loguearte? No  puedo loguear a un usuario recién registrado, perdón. `
            })
        } else {
            res.render('templateView', { 
                title: 'Caniada - Crear cuenta',
                view: '/usuario/register',
                errors: errors.errors
            })
            console.log(errors.errors)
        }
    }
}

module.exports = loginRegister