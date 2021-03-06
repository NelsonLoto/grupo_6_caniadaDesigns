////////////----------------REQUIRES-------------------////////////

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
const methodOverride = require ('method-override')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require ('cors')




const recordameMiddleware = require ('./middlewares/recordameMiddleware')
const usuarioLogueado = require ('./middlewares/usuarioLogueado')
const {guestAuth, userAuth, roleAuth} = require ('./middlewares/authMiddleware')

let rutasMain = require('./routes/main')
let rutasAdmin = require('./routes/admin');
let rutasProductos = require('./routes/productos');
let rutasUsuarios = require('./routes/usuarios');
let rutasApi = require('./routes/api')


////////////////////- USING OVERRIDEMETHOD -///////////////
app.use(methodOverride('_method'));


////////////////////-EJS-///////////////////////
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


////////////-----------------PUBLIC--------------------////////////
app.use(express.static(path.join(__dirname, '../public')));



////////////---------------MIDDLEWARES-----------------//////////// 
app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.use(cookieParser());
app.use(session({
     key:"user_sid",
     secret: "laSalNoSalaYElAzucarNoEndulza",
     saveUninitialized:false,
     resave:false,
     cookie:{
          httpOnly:true,
          maxAge:36000000
     }
}));


//Este middleware verificará si la cookie del usuario todavía está guardada en el navegador y el usuario no está logueado, si es asi, cerrará automáticamente la sesión del usuario.
// Esto generalmente sucede cuando detiene su servidor express después de iniciar sesión, su cookie aún permanece guardada en el navegador.

app.use((req, res, next) => {
     if (req.cookies.user_sid && !req.session.user) {
         res.clearCookie('user_sid');        
     }
     next();
 });


app.use(recordameMiddleware);
app.use(usuarioLogueado);
app.use(cors())




////////////------------------RUTAS--------------------////////////
app.use('/', rutasMain) //funciona OK
app.use('/productos', rutasProductos) //funciona OK
app.use('/usuarios', rutasUsuarios) //funciona OK
app.use('/admin', rutasAdmin)
app.use('/api', rutasApi)

////////////////////- ERROR 404 -///////////////
app.use((req, res, next) => {
     res.status(404).render('templateView', {
          title: 'Caniada - Not found', 
          view: 'not_found',
     })
})


////////////---------------PUERTO:3000-----------------////////////
app.listen(process.env.PORT || 3000, function () {
     console.log('Server running at http://localhost:3000/')
}) // parametros distintos a "('localhost', 3000)" porque para heroku se necesita tener estos parametros pasados. 







