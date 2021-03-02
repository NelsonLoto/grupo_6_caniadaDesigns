const db = require('../database/models')
const Sequelize = require ('sequelize')
const { setRandomFallback } = require('bcryptjs')

let apiController = {
    productos: function(req,res){

        db.Categoria.findAll({
            include: {
                all: true
            }
        }).
        then(function(resultadoCategorias){
            db.Producto.findAll()
            .then(function(resultadoProductos){

                let productosPorCategoria={}
                resultadoCategorias.forEach(function(element){
                    productosPorCategoria[element.nombre_categoria] = element.productos_categoria.length
                })

                let detalleProductos = []
                for(let i=0; i<resultadoProductos.length; i++){
                    detalleProductos.push({
                        id:resultadoProductos[i].id_producto,
                        name: resultadoProductos[i].nombre,
                        description: resultadoProductos[i].descripcion,
                        detail: `/api/products/${resultadoProductos[i].id_producto}`
                    })
                }
                let response = {
                    totalDeProductos: resultadoProductos.length,
                    productosPorCategoria,
                    productos: detalleProductos
                }
                res.status(200).json(response)
            })
        })
        // db.Categoria.findAll({ 
        //     attributes: { 
        //         include: [[Sequelize.fn("COUNT", Sequelize.col("id_categoria")), "cantidadPorCategoria"]] 
        //     },
        //     include: [{
        //         model: db.Producto,
        //         as: 'productos',
        //          attributes: [],
                
        //     }],
        //     group: ['id']
        // }).then(function(resultados){
        //     let categorias = []
        //     for (let i = 0; i < resultados.length; i++) {
        //         categorias.push({
        //             Categoria: resultados[i].nombre_categoria,
        //             productos: resultados[i].cantidadPorCategoria
                    
        //         })
        //     }
        //     db.Producto.findAll()
        //     .then(function(Productos){
        //         let arreglo = []
        //         for(let i=0; i<Productos.length; i++){
        //             arreglo.push({
        //                 id:Productos[i].id_producto,
        //                 name: Productos[i].nombre,
        //                 description: Productos[i].descripcion,
        //                 detail: `/productos/${Productos[i].sku}`
        //             })
        //         }
        //         res.json({
        //             resultados:categorias,
        //             count: Productos.length,
        //             Ruta: arreglo,
        //             Productos: Productos
                   
        //         })
        //     })
        // })
    },
    detalle: function(req,res){
        db.Producto.findOne({
            where : {
                id_producto : req.params.id
            }
        })
        .then(function(productoDetail){
            res.status(200).json({
                product: productoDetail,
                url: `/public/images/fotosProductos/${productoDetail.imagen_1}`
            })
        })
    }
}



module.exports = apiController;