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

        // return res.send({
        //     producto : producto,
        //     categoria: categoria,
        //     title : producto.nombre,
        //     productosDB : productosDB,
        // })
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
    checkout: async function (req, res) {

        let carritoRecibido = req.body;
        let carritoLength = req.body.carritoLength;
        let productosCrudo = [];
        let arrayDeProductosEnCarrito = [];

        for (let propiedad in carritoRecibido) {
            for(let i= 1; i<= carritoLength; i++){
                if(propiedad == `producto${i}`){
                    let producto = propiedad;
                    productosCrudo.push(carritoRecibido[producto])
                }
            }
        }

        productosCrudo.forEach(e=>{
            
            let producto = {
                id_producto : e.split("_", 1)[0],
                cantidad : parseInt(e.split("_", 2)[1]),
                talle : e.split("_", 3)[2],
                monto_parcial: parseInt(e.split("_", 4)[3]),
            }
            arrayDeProductosEnCarrito.push(producto)
        })

    
        let venta = await db.Venta.create({
            id_usuario : parseInt(carritoRecibido.idUsuario),
            monto_parcial : parseInt(carritoRecibido.carritoSubtotal),
            monto_total : parseInt(carritoRecibido.carritoTotal),
            calle_envio : carritoRecibido.calle,
            numero_calle_envio: parseInt(carritoRecibido.numeracion),
            codigo_postal : parseInt(carritoRecibido.zip),
            id_ciudad: 5,
            id_forma_pago: 3,
            id_descuento: 1
        });


        let detalleVenta = await arrayDeProductosEnCarrito.forEach(unProducto=>{
            db.DetalleVenta.create({
                id_venta : venta.id_venta,
                id_producto : unProducto.id_producto,
                cantidad : unProducto.cantidad,
                monto_parcial : unProducto.monto_parcial
            })
        })

        console.log(detalleVenta)

        res.redirect('/')

    },
    productosAdmin: function ( req,res ){
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
            include : {
                all: true
            }
        })
        let categorias = await db.Categoria.findAll()
        let generos = await db.Genero.findAll()
        let colores = await db.Color.findAll()
        let talles = await db.Talle.findAll()

        // return res.send({producto: producto,talles: talles})
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