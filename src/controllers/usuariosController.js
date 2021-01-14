const path = require ('path');
const bcrypt = require ('bcryptjs');
const fs = require ('fs')
const { validationResult } = require('express-validator');
const { toUnicode } = require('punycode');

let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8'));
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
            // login como el de formularios de repaso de Express que subieron Herni y Uri
        
            let errors = validationResult(req)
            let { email, password, remember } = req.body;

            if(errors.isEmpty()){
                let usuarioALoguearse;

                users.forEach(user => {
                    if (user.email === email && bcrypt.compareSync(password, user.password)) {
                        usuarioALoguearse = user;
                        req.session.user = usuarioALoguearse.email;
                        

                    }
                    
                });

                

                if (usuarioALoguearse == undefined) {
                    return res.render('templateView', { 
                        title: 'Caniada - Iniciar sesión',
                        view: '/usuario/login',
                        bienvenida: `Parece que ${email} o la constraseña no son correctos. Si todavía no tenés una cuenta, podés crear una`,
                        error: true,
                    })
                } 

                
                if (remember != undefined) {
                    res.cookie('remember', usuarioALoguearse.email, { maxAge: 600000000 });
                }
                
                return res.redirect('/');
                
             
            }else {
                res.render('templateView', { 
                    title: 'Caniada - Iniciar sesión',
                    view: '/usuario/login',
                    errors: errors.mapped(),
                    datosYaCargados: req.body,//en esta variable se guarda todo lo que llega del login que intentó hacer el usuario pero fue erróneo
                    error: false,
                    bienvenida: 'No ingresaste datos válidos. Intentalo nuevamente, o crea una nueva cuenta '
                })
                console.log(errors.mapped())
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
                repassword: req.body.password,
                avatar: req.file.filename || " ",
                rol: 1
            }
            users.push(newUser);
            
            req.session.user = newUser.email
            //apenas se termina de registrar se crea una sesión que va a persistir siempre y cuando no se cierre el navegador. Pero por el momento no funciona porque el servidor se reinicia debido a que se reescribe la base de datos al hacer fs.writeFileSync(), entonces la session se cae. Para eso: 
            
             
            res.cookie('loguearANewUser', req.body.email, {maxAge: 10000} )//se crea una cookie que dura 10 segundos y que es procesada por el middleware loguearANewUserMiddleware.js y lo que hace es preguntar: existe una cookie llamada req.cookies.loguearANewUser? en caso de que sí, compara el mail de la cookie con los de la Base de datos y si hace match, crea una session.

            if(typeof req.body.remember != 'undefined'){
                res.cookie('remember', req.body.email, {maxAge: 60000000000})
            }//en caso de que el usuario antes de registrarse haya clickeado en "RECORDAME", se crea una cookie que almacena el mail del usuario registrado y por mas que se cierre el navegador, se va a poder loguear automaticamente cuando vuelva a entrar gracias al MIDDLEWARE de aplicacion llamado: recordameMiddleware .--- ver funcionalidad. (es el mismo para el REMEMBER de Login.)

            
            fs.writeFileSync(path.join(__dirname, '../database/users.json'), JSON.stringify(users, null,4));
            

            req.session.user = newUser.email
            res.locals.usuarioLogueado = newUser
            res.redirect('/')


        } else {
            res.render('templateView', { 
                title: 'Caniada - Crear cuenta',
                view: '/usuario/register',
                errors: errors.mapped(),
                datosYaCargados: req.body
            })
            console.log(errors.mapped())
        }
    },
    users: function (req, res) {
    res.render('templateAdmin', { 
            title: 'Admin',
            view: '/usuariosAdmin/listadoUsuarios',
            users
        })
    }
}

module.exports = usuarios