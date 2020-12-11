const path = require ('path');
const fs = require ('fs')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

const usuarioRegistrado = function (req, res, next) {
     if (req.cookies.loginCookie != undefined){
          res.locals.usuarioaLoguear = req.cookies.loginCookie;
          console.log(res.locals.usuarioaLoguear)
     }
     next()
}

module.exports = usuarioRegistrado




