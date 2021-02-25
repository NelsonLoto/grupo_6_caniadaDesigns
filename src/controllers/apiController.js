const db = require('../database/models')
const Sequelize = require ('sequelize')

let apiController = {
    productos: function(req,res){
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
                    })
                   
                }
                 
                res.json({
                    Count: resultados.length,
                    countByCategory: productosPorCategoria,
                    Products: arreglo
                    
        })
    })
})
    }}

module.exports = apiController;