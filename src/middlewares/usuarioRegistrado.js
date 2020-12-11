const path = require ('path');
const fs = require ('fs')

const usuarioRegistrado = function (req, res, next) {
     if (req.cookies.loginCookie != undefined){
          res.locals.usuarioaLoguear = req.cookies.loginCookie;
          console.log(res.locals.usuarioaLoguear)
     }
     next()
}

module.exports = usuarioRegistrado




