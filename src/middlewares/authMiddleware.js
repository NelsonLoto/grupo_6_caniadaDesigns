const db = require('../database/models')

module.exports = {
    guestAuth: function (req, res, next) {
        if (req.session.user == undefined) {
            res.status(403)
            return res.redirect('/')
        }
        next()
    },
    userAuth: function (req, res, next) {
        if (req.session.user != undefined) {
            res.status(403)
            return res.redirect('/')
        }
        next()
    },
    roleAuth: async function (req, res, next) {
        if (req.session.user == undefined) {
            res.status(401)
            return res.redirect('/')
        }
        if (req.session.user != undefined) {
            let loggedUser = await db.Usuario.findByPk(req.session.user.id_usuario, {
                include: [
                    { association: 'rol' }
                ]
            })
            if (loggedUser.rol.nombre_rol == 'Usuario') {
                res.status(401)
                return res.redirect('/')
            }
        }
        next()
    }
}
// function authRole (req, res, next){
//     console.log('Hola');
// }
// next()
    // if (req.session.user){
    //     console.log('Está ingresando un usuario registrado');
    //     db.Usuario.findByPk(req.session.user.id_usuario, {
    //         include : [
    //             {association : 'rol'}
    //         ]
    //     })
    //         .then (function(loguedUser){
    //             console.log(loguedUser.rol.nombre_rol);
    //         });
    // }
    // if (req.session.user.rol.nombre_rol == 'Admin') {
    //     console.log('El usuario es un admin');
    // }
    // if (req.session.user.rol.nombre_rol == 'Propietarioa') {
    //     console.log('El usuario es propietario');
    // }
    // if (req.session.user.rol.nombre_rol == 'Editor') {
    //     console.log('El usuario es editor');
    // }
    // if (req.session.user.rol.nombre_rol == 'Development') {
    //     console.log('El usuario es desarrollador');
    // }
    // if (req.session.user.rol.nombre_rol == 'Usuario') {
    //     console.log('El usuario es usuario');
    // next()   
