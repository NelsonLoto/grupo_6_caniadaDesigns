// Requiriendo módulos
const path = require('path')
const fs = require('fs')
const db = require('../database/models')
const { resolveSoa } = require('dns')
const { QueryTypes } = require('sequelize')
const { text, response } = require('express')
//Leyendo JSON DB
let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8')) // 

//Leyendo CATEGORIAS JSON DB para pasarle a los SELECTs 
let categoriasDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categoriasProductos.json'), 'utf8'))

const categoriaDB = categoriasDB[0]
const generoDB = categoriasDB[1]
const coloresDB = categoriasDB[2]
const tallesDB = categoriasDB[3]

//Funcionalidad

let productosController = {
    productos: function (req, res) {  
            db.Producto.findAll({
                include : {
                    all : true
                }
            })
                .then (function(productos){
                    res.render('productos', {
                        title: 'Caniada - Productos', 
                        productosDB : productos})
                })  
    },
    detalle : async function (req, res){
        let producto = await db.Producto.findOne({
            where : {
                id_producto : req.params.id_producto
            },
            include : {
                all: true
            }
        })
        let productosDB = await db.Producto.findAll({
            include : {
                all: true
            }
        })
        let categoria = await db.Categoria.findOne({
            where : {
                id : producto.id_categoria
            }
            
        })
        return res.render('detalleProducto', {
            producto : producto,
            categoria: categoria,
            title : producto.nombre,
            productosDB : productosDB,
        })
    },
    carrito : function (req, res) {
        res.render('carrito',  { title: 'Caniada - Carrito' })
    },
    checkout: function(req, res){
        console.log(req.body)
        res.send(req.body)

    },
    productosAdmin: function ( req, res ){
        db.Producto.findAll()
            .then ((productosDB)=> res.render ('templateAdmin', {
                productosDB : productosDB,
                view: '/productosAdmin/listadoProductos',
                title: 'Admin - Productos'
            }))
    },
    crearView : async function (req, res){ //Ruta por GET para llegar a la carga.
        let categorias = await db.Categoria.findAll()
        let generos = await db.Genero.findAll()
        let colores = await db.Color.findAll()
        let talles = await db.Talle.findAll()
        let consultaSku = await db.sequelize.query ('SELECT MAX(id_producto) AS maxId FROM productos', {
            type : QueryTypes.SELECT})
        let skuDisponible = (consultaSku[0].maxId)+1
        res.render ('templateAdmin', { 
                    categorias : categorias,
                    generos : generos,
                    colores : colores,
                    talles : talles,
                    title: 'Admin - Nuevo producto',
                    skuDisponible,
                    view: '/productosAdmin/crearProducto',
                })
    },
    crearSave : function (req, res){ //Ruta por POST al enviar formulario.
        db.Producto.create(({
            id_categoria: req.body.categoria,
            id_genero: req.body.genero ,
            nombre: req.body.nombre,
            id_color: req.body.color,
            id_talle: req.body.talle,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            sku: req.body.sku,
            imagen_1: req.file.filename
        }))
        
        res.render('templateAdmin', {
            accion: 'Crear nuevo producto',
            path: '/admin/productos/nuevo',
            title: 'Producto creado con éxito',
            view: '/productosAdmin/success',
        })
    },
    editarView : async function (req, res){//Deberíamos poder editar por SKU y no por ID
        let producto = await db.Producto.findByPk(req.params.id, {
            include : [
                {association : 'color'},
                {association : 'genero'},
                {association : 'categoria'},
                {association : 'talle'}
            ]
        })
        let categorias = await db.Categoria.findAll()
        let generos = await db.Genero.findAll()
        let colores = await db.Color.findAll()
        let talles = await db.Talle.findAll()
        return res.render('templateAdmin', {
            title : 'Admin - Editar producto',
            view: '/productosAdmin/editarProducto',
            producto : producto,
            categorias : categorias,
            generos : generos,
            colores : colores,
            talles : talles
        })
    },
    editarSave : function(req, res){
        db.Producto.update({
            id_categoria: req.body.categoria,
            id_genero: req.body.genero ,
            nombre: req.body.nombre,
            id_color: req.body.color,
            id_talle: req.body.talle,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            sku: req.body.sku
        },{
            where : {
                id_producto : req.params.id
            }
        })
        res.render('templateAdmin', {
            accion: 'Editar otro producto',
            admin: true,
            path: '/admin/productos/all',
            title: 'Producto editado con éxito',
            view: '/productosAdmin/success',
        })
},
    borrar : function (req, res){
    db.Producto.destroy({
        where : {
            id_producto : req.params.id
        }
    })
    res.redirect('/admin/productos/all')
    }
}


module.exports = productosController