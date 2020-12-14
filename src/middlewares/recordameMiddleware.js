const path = require ('path');
const fs = require ('fs')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

function recordameMiddleware( req,res,next){

     if (req.cookies.remember != undefined){
               for (let i = 0; i < users.length; i++) {
               if (users[i].email == req.cookies.remember){
                    req.session.usuarioLogueado= users[i];
               } 
               }
               res.locals.usuarioLogueado = req.session.usuarioLogueado;
          }
          next();
}


module.exports = recordameMiddleware