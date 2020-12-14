const fs = require ('fs')
const path = require ('path')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

function usuarioLogueado (req, res, next) {
     if (req.session.user != undefined){
          for (let i = 0; i < users.length; i++) {
               if (users[i].email == req.session.user){
                    req.session.usuarioLogueado= users[i];
               } 
               }
               res.locals.usuarioLogueado = req.session.usuarioLogueado;
     } 
     next()
     
}

module.exports = usuarioLogueado