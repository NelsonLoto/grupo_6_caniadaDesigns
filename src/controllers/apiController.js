const db = require('../database/models')
const Sequelize = require ('sequelize')

let apiController = {
    productos: function(req,res){
        db.Categoria.findAll({ 
            attributes: { 
                include: [[Sequelize.fn("COUNT", Sequelize.col("id_categoria")), "n_productos"]] 
            },
            include: [{
                model: db.Producto,
                as: 'productos',
                 attributes: [],
                
            }],
            group: ['id']
        }).then(function(resultados){
            let categorias = []
            for (let i = 0; i < resultados.length; i++) {
                categorias.push({
                    Categoria: resultados[i].nombre_categoria,
                    productos: resultados[i].n_productos
                })
            }
            db.Producto.findAll()
            .then(function(Productos){
                let arreglo = []
                for(let i=0; i<Productos.length; i++){
                    arreglo.push({
                        id:Productos[i].id_producto,
                        name: Productos[i].nombre,
                        description: Productos[i].descripcion,
                        detail: `/productos/${Productos[i].sku}`
                    })
                }
                res.json({
                    resultados:categorias,
                    count: Productos.length,
                    Ruta: arreglo,
                    Productos: Productos
                   
                })
            })
        })
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


module.exports = apiController;