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
               res.locals.usuarioLogueado = req.session.usuarioLogueado;//res.locals comparte datos entre todas las vistas sin tener que procesarlos por los controladores. es decir los datos que nosotros querramos siempre van a estar disponibles para usar en todas las vistas siempre y cuando no se cierre el navegador. cuando se vuelva a iniciar sesión, vuelven a persisitir los mismos datos. Por eso, el header o el footer pueden mostrar una cosa y otra, dependiendo de: si hay una sesión iniciada y si existe una variable locals.loQueSeaQueHayamosSeteado, en este caso: locals.usuarioLogueado
     }
     next();
}


module.exports = recordameMiddleware