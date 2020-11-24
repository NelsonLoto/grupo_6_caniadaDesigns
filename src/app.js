////////////----------------REQUIRES-------------------////////////

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

let rutasProductos = require('./routes/productos')
let rutasCarrito = require('./routes/carrito')
let rutasCrearUsuario = require('./routes/crearUsuario')
let rutasMain = require('./routes/main')
let rutasLoginRegister = require('./routes/loginRegister')


////////////////////-EJS-///////////////////////
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


////////////-----------------PUBLIC--------------------////////////
app.use(express.static(path.join(__dirname, '../public')));


////////////---------------GUARDANDO METHOD=POST EN JSON DB-----------------//////////// 
app.use(express.urlencoded({extended : false}))
app.use(express.json())

////////////------------------RUTAS--------------------////////////
app.use('/', rutasMain) //funciona OK

app.get('/carrito', rutasCarrito) //funciona OK

app.use('/productos', rutasProductos) //funciona OK

app.use('/usuario', rutasLoginRegister) //funciona OK

app.use('/crearUsuario', rutasCrearUsuario) //funciona OK

////////////---------------PUERTO:3000-----------------////////////
app.listen(process.env.PORT || 3000, function () {
     console.log('Server running at http://localhost:3000/')
}) // parametros distintos a "('localhost', 3000)" porque para heroku se necesita tener estos parametros pasados. 







