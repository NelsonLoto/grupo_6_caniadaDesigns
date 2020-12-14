////////////----------------REQUIRES-------------------////////////

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
const methodOverride = require ('method-override')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const recordameMiddleware = require ('./middlewares/recordameMiddleware')



let rutasMain = require('./routes/main')
let rutasAdmin = require('./routes/admin');
let rutasProductos = require('./routes/productos');
let rutasUsuarios = require('./routes/usuarios');


////////////////////- USING OVERRIDEMETHOD -///////////////
app.use(methodOverride('_method'));

////////////////////-EJS-///////////////////////
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


////////////-----------------PUBLIC--------------------////////////
app.use(express.static(path.join(__dirname, '../public')));



////////////---------------MIDDLEWARES-----------------//////////// 
app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.use(cookieParser());
app.use(session({secret: "laSalNoSalaYElAzucarNoEndulza"}));
app.use(recordameMiddleware);




////////////------------------RUTAS--------------------////////////
app.use('/', rutasMain) //funciona OK
app.use('/productos', rutasProductos) //funciona OK
app.use('/usuarios', rutasUsuarios) //funciona OK
app.use('/admin', rutasAdmin)

////////////---------------PUERTO:3000-----------------////////////
app.listen(process.env.PORT || 3000, function () {
     console.log('Server running at http://localhost:3000/')
}) // parametros distintos a "('localhost', 3000)" porque para heroku se necesita tener estos parametros pasados. 







