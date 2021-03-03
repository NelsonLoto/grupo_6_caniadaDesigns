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
            db.Producto.findAll({
                include : {
                    all : true
                }
            })
            .then(function(resultadoProductos){

                let productosPorCategoria={}
                resultadoCategorias.forEach(function(element){
                    productosPorCategoria[element.nombre_categoria] = element.productos_categoria.length
                })

                console.log(resultadoProductos);

                let detalleProductos = []
                for(let i=0; i<resultadoProductos.length; i++){
                    detalleProductos.push({
                        id:resultadoProductos[i].id_producto,
                        name: resultadoProductos[i].nombre,
                        description: resultadoProductos[i].descripcion,
                        detail: `/productos/${resultadoProductos[i].id_producto}`,
                        relations : {
                        color : resultadoProductos[i].color.nombre_color,
                        genero : resultadoProductos[i].genero.nombre_genero,
                        categoria : resultadoProductos[i].categoria.nombre_categoria,
                        talle : resultadoProductos[i].talle.nombre                         
                    }
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
    },
    detalle: function(req,res){
        db.Producto.findByPk(req.params.id, {
            include : {
                all : true
            }
        })
        .then(function(productoDetail){            
            let relations = [
                productoDetail.color.nombre_color, 
                productoDetail.genero.nombre_genero, 
                productoDetail.categoria.nombre_categoria,
                productoDetail.talle.nombre 
            ]
            res.status(200).json({
                product : {
                    id_producto : productoDetail.id_producto,
                    sku : productoDetail.sku,
                    nombre : productoDetail.nombre,
                    descripcion : productoDetail.descripcion,
                    precio : productoDetail.precio,
                    cantidad : productoDetail.cantidad,
                    imagen_1 : productoDetail.imagen_1,
                    imagen_2 : productoDetail.imagen_2,
                    imagen_3 : productoDetail.imagen_3,
                    imagen_4 : productoDetail.imagen_4,
                    id_color : productoDetail.id_color,
                    id_genero : productoDetail.id_genero,
                    id_categoria : productoDetail.id_categoria,
                    id_talle: productoDetail.id_talle,
                    created_at : productoDetail.created_at,
                    updated_at: productoDetail.updated_at,
                    deleted_at : productoDetail.deleted_at,
                    url: `/public/images/fotosProductos/${productoDetail.imagen_1}`,
                    relations : relations
                }
                // product: productoDetail,
                // relations : {
                //     color : productoDetail.color.nombre_color,
                //     genero : productoDetail.genero.nombre_genero,
                //     categoria : productoDetail.categoria.nombre_categoria,
                //     talle : productoDetail.talle.nombre                         
                // },
            })
        })
    } 
}


module.exports = apiController;