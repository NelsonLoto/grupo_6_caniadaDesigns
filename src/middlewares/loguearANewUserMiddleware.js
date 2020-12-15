const path = require ('path');
const fs = require ('fs')

let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8'))

function loguearANewUserMiddleware( req,res,next){
     if (req.cookies.loguearANewUser != undefined){
          for (let i = 0; i < users.length; i++) {
               if (users[i].email == req.cookies.loguearANewUser){
                    req.session.user= users[i].email;
                    res.locals.usuarioLogueado = users[i];
               } 
               }
               
     }
     next();
}


module.exports = loguearANewUserMiddleware