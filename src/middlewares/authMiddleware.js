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
