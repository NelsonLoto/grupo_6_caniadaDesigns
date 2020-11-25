// Requiriendo módulos
const path = require('path')
const fs = require('fs')
const express = require('express')

//Leyendo JSON DB
let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8'))

//Funcionalidad

let productosController = {
    productos: function (req, res) {
        res.render('detalleproducto',  { title: 'Caniada - Productos' })
    },
    crearView : function (req, res){ //Ruta por GET para llegar a la carga.
        res.render ('crearProducto', { title: 'Caniada - Crear Producto'})
    },
    crear : function (req, res){ //Ruta por POST al enviar formulario.
        productosDB.push(req.body)
        console.log(req.body)
        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productosDB, null, 4))
        res.redirect ('/productos/crear/success')
    },
    success : function (req, res){
        res.render('crearProductoSuccess', {title: 'Caniada - Producto creado'})
    }

}

module.exports = productosController