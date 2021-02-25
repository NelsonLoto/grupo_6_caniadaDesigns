const db = require('../database/models')
const Sequelize = require ('sequelize')
const { setRandomFallback } = require('bcryptjs')

let apiController = {
    productos: function(req,res){
<<<<<<< HEAD
        db.Producto.findAll()
        .then(function(resultados){
            db.Categoria.findAll({ include: { all: true }})
        .then(function(categorias){
            let productosPorCategoria = {}

            for (let i = 0; i < categorias.length; i++) {
                productosPorCategoria[categorias[i].nombre_categoria] = categorias[i].productos.length
                
            
            }
            // categorias.forEach(element => {
            //     productosPorCategoria[element.nombre_categoria] = element.productos.length
            // });
            let arreglo = []
                for(let i=0; i<resultados.length; i++){
                    arreglo.push({
                        id:resultados[i].id_producto,
                        name: resultados[i].nombre,
                        description: resultados[i].descripcion,
                        detail: `/productos/${resultados[i].nombre}`
=======

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
                        detail: `/productos/${resultadoProductos[i].id_producto}`
>>>>>>> 3c344696dccb014e4e536c349f517d930f271562
                    })
                   
                }
<<<<<<< HEAD
                 
                res.json({
                    Count: resultados.length,
                    countByCategory: productosPorCategoria,
                    Products: arreglo
                    
        })
    })
})
    }}
=======
                let response = {
                    totalDeProductos: resultadoProductos.length,
                    productosPorCategoria,
                    productos: detalleProductos
                }
                res.json(response)
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
    }
}

    /* detalle: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then(function(productoDetail){
            res.json({
                product: productoDetail,
                url: `/public/images/fotosProductos/${productoDetail.imagen_1}`
            })
        })
    } */

>>>>>>> 3c344696dccb014e4e536c349f517d930f271562

module.exports = apiController;