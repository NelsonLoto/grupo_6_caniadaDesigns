const db = require('../database/models')

let apiController = {
    productos: function(req,res){
        db.Producto.findAll()
        .then(function(resultados){
            db.sequelize.query('SELECT C.NOMBRE_CATEGORIA AS "NOMBRE_CATEGORIA", COUNT(*) AS "CANTIDAD_PRODUCTOS" FROM CATEGORIAS C JOIN PRODUCTOS P ON C.ID_CATEGORIA = P.ID_CATEGORIA GROUP BY C.NOMBRE_CATEGORIA')
            .then(function(conteo){
                let arreglo = []
                for(let i=0; i<resultados.length; i++){
                    arreglo.push({
                        id:resultados[i].id_producto,
                        name: resultados[i].nombre,
                        description: resultados[i].descripcion,
                        detail: `/productos/${resultados[i].sku}`
                    })
                }
                res.json({
                    count: resultados.length,
                    countByCategroy: conteo[0][0],
                    products: arreglo
                })
            })
        })
    }
}

module.exports = apiController;