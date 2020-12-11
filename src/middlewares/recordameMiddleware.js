const path = require ('path');
const fs = require ('fs')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

function recordameMiddleware( req,res,next){
     let usuarioALoguearse
     if (req.cookies.remember != undefined && req.session.usuarioLogueado == undefined){
               for (let i = 0; i < users.length; i++) {
               if (users[i].email == req.cookies.remember){
                    usuarioALoguearse= users[i];
               } 
               }
          }
          req.session.usuarioLogueado = usuarioALoguearse;
          next();
}


module.exports = recordameMiddleware