// Requiriendo módulos
const path = require('path')
const fs = require('fs')
const express = require('express')

//Leyendo JSON DB
let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8'))

//Funcionalidad

let productosController = {
    productos: function (req, res) {
        res.render('productos', {title: 'Caniada - Productos'})
    },
    crearView : function (req, res){ //Ruta por GET para llegar a la carga.
        res.render ('crearProducto', { title: 'Caniada - Crear Producto'})
    },

    crear : function (req, res){ //Ruta por POST al enviar formulario.

        let productoCargado = {
            categoria: req.body.categoria,
            genero: req.body.genero ,
            nombre: req.body.nombre,
            color: req.body.color,
            talle: req.body.talle,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            modelo: req.body.modelo,
            composicion: req.body.composicion,
            sku: req.body.sku,
            fotoProducto: req.file.filename}
        
            productosDB.push(productoCargado);
            console.log(req.files);

        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productosDB, null, 4));

        res.redirect('/productos/crear/success')
    },

    success : function (req, res){
        res.render('crearProductoSuccess', {title: 'Caniada - Producto creado'})
    },

    detalle: function (req, res) {
        for (let i = 0; i < productosDB.length; i++) {
            console.log(req.params.sku);
            if(req.params.sku == productosDB[i].sku){
           return res.render('detalleProducto', {productosDB: productosDB[i], title : productosDB[i].nombre})
            }           
            
            
        }
        res.send("No encontramos ese producto")
    }

}

module.exports = productosController