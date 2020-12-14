const path = require ('path');
const bcrypt = require ('bcryptjs');
const fs = require ('fs')
const { validationResult } = require('express-validator');


let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

let ultimoId = 0;
for(let i = 0; i < users.length; i++) {
    if(ultimoId < users[i].id) {
        ultimoId = users[i].id
    }
}

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
            let { email, password, remember } = req.body;

            if(errors.isEmpty()){
                let usuarioALoguearse;

                users.forEach(user => {
                    if (user.email === email && bcrypt.compareSync(password, user.password)) {
                         usuarioALoguearse = user;
                    }
                });

                if (usuarioALoguearse == undefined) {
                    res.render('templateView', { 
                        title: 'Caniada - Iniciar sesión',
                        view: '/usuario/login',
                        bienvenida: `Parece que ${req.body.email} o la constraseña no son correctos. Si todavía no tenés una cuenta, podés crear una`,
                        error: true
                    })
                } 
                req.session.user = usuarioALoguearse.email;
                
                if (remember != undefined) {
                    res.cookie('remember', usuarioALoguearse.email, { maxAge: 600000000 });
                }
                
                return res.redirect('/');
                
                //
                for (let i = 0; i < users.length; i++) {
                 
                    if (users[i].email == req.body.email){
                        
                        if( bcrypt.compareSync(req.body.password, users[i].password)){
                            req.session.usuarioLogueado = req.body.email;

                            if(req.body.remember != 'undefined'){
                                    res.cookie('remember', req.body.email,    {maxAge: 6000000000} )
                            }
                        res.redirect('/')

                        }else{
                            res.render('templateView', { 
                                title: 'Caniada - Iniciar sesión',
                                view: '/usuario/login',
                                bienvenida: `Parece que ${req.body.email} o la constraseña no son correctos. Si todavía no tenés una cuenta, podés crear una`,
                                error: true
                            })}
                    } else {
                                res.render('templateView', { 
                                    title: 'Caniada - Iniciar sesión',
                                    view: '/usuario/login',
                                    errors: errors.mapped(),
                                    old: req.body,
                                    error: false,
                                    bienvenida: 'No ingresaste datos válidos. Intentalo nuevamente, o crea una nueva cuenta '
                            })
                    }
                    }
             
            }else {
                res.render('templateView', { 
                    title: 'Caniada - Iniciar sesión',
                    view: '/usuario/login',
                    errors: errors.mapped(),
                    old: req.body,
                    error: false,
                    bienvenida: 'No ingresaste datos válidos. Intentalo nuevamente, o crea una nueva cuenta '
                })
                console.log(errors.mapped())
            }
        
    },
    logout: function (req, res) {
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
    registerPost: function(req, res) {

        // NOdemon se reinicia al hacer el fs.writeFileSync. No se puede loguear al usuario recien registrado. NO persiste la session. 
        
        let errors = validationResult(req)
        if(errors.isEmpty()){

            let newUser = {
                id : ultimoId + 1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename || " ",
                rol: 1
            }
            users.push(newUser);
            
            // res.cookie('loginCookie', newUser.email, {maxAge: 60000} )
            // req.session.newUser = newUser.email

            if(req.body.remember != 'undefined'){
                res.cookie('remember', req.body.email,    {maxAge: 6000000000})
            }

            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(users, null,4));
            
            console.log(req.session.newUser)
            
            return res.redirect('/')

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

module.exports = usuarios