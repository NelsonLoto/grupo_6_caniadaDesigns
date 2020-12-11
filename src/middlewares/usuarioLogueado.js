const usuarioLogueado = function (req, res, next) {
     if (res.locals.usuarioaLoguear != undefined){
          req.session.usuarioLogueado = res.locals.usuarioaLoguear ;
     } else(console.log('no hay nadie logueado'))
     next()
}

module.exports = usuarioLogueado