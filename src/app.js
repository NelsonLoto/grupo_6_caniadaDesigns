////////////----------------REQUIRES-------------------////////////

     const express = require('express');
     const app = express();
     const fs = require('fs');
     const path = require('path')


////////////-----------------PUBLIC--------------------////////////
     app.use(express.static(path.join(__dirname, './public')));



////////////------------------RUTAS--------------------////////////
     app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname, '/views/index.html'))
     }) //funciona OK

     app.get('/carrito', function (req, res) {
          res.sendFile(path.join(__dirname, '/views/carrito.html'))
     }) //funciona OK

     app.get('/productos', function (req, res) {
          res.sendFile(path.join(__dirname, '/views/detalleProducto.html'))
     }) //funciona OK

     app.get('/usuario', function (req, res) {
          res.sendFile(path.join(__dirname, '/views/loginRegister.html'))
     }) //funciona OK


////////////---------------PUERTO:3000-----------------////////////
     app.listen(process.env.PORT || 3000, function(){
          console.log('Server running at http://localhost:3000/')
     }) // parametros distintos a "('localhost', 3000)" porque para heroku se necesita tener estos parametros pasados. 







