const db = require('../database/models')
const Sequelize = require ('sequelize')
const { setRandomFallback } = require('bcryptjs')
const { signedCookie } = require('cookie-parser')

let apiController = {
    products: function(req,res){

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

                
                let montoVendidoTotal = 0;

                resultadoProductos.forEach(function(element){
                    if(element.detallesVentasPorId.length != 0){
                        for(let i=0; i < element.detallesVentasPorId.length; i++){
                            montoVendidoTotal += parseInt(element.detallesVentasPorId[i].monto_parcial)
                        }
                    }
                })


                let detalleProductos = []
                for(let i=0; i<resultadoProductos.length; i++){
                    detalleProductos.push({
                        id:resultadoProductos[i].id_producto,
                        name: resultadoProductos[i].nombre,
                        description: resultadoProductos[i].descripcion,
                        detail: `/api/products/${resultadoProductos[i].id_producto}`,
                        image: `/images/fotosProductos/${resultadoProductos[i].imagen_1}`,
                        relations : {
                        color : resultadoProductos[i].color.nombre_color,
                        genero : resultadoProductos[i].genero.nombre_genero,
                        categoria : resultadoProductos[i].categoria.nombre_categoria,
                        talle : resultadoProductos[i].talle.nombre
                        // cantidadVendida: resultadoProductos[i].detallesVentaPorId[0].cantidad,
                        // montoVendido: resultadoProductos[i].detallesVentaPorId[0].monto_parcial
                    }
                    })
                }
                let response = {
                    totalDeProductos: resultadoProductos.length,
                    montoVendidoTotal,
                    productosPorCategoria,
                    productos: detalleProductos
                }
                res.status(200).json(response)
            })
        })
    },
    productDetail: function(req,res){
        db.Producto.findByPk(req.params.id, 
            {include : {all : true}}
        )
        .then(function(productoDetail)
        {            
            let relations = {
                color: productoDetail.color.nombre_color, 
                genero:productoDetail.genero.nombre_genero, 
                categoria:productoDetail.categoria.nombre_categoria,
                talle: productoDetail.talle.nombre
            }//el sprint pide un array de las relaciones que tenga, pero la realidad es que es mas accesible enviar un objeto para accederlo simplemente sin tener que recorrerlo. QUE OPINAN?
            
            res.status(200).json(
                {
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
                        // id_color : productoDetail.id_color,
                        // id_genero : productoDetail.id_genero,
                        // id_categoria : productoDetail.id_categoria,
                        // id_talle: productoDetail.id_talle,
                        //NO TIENE SENTIDO ENVIAR ESTOS DATOS EN LA API, YA QUE ENVIAMOS EL DATO RELACIONADO DENTRO DE LA PROPIEDAD RELATIONS, a pesar de que el sprint lo pida, no es funcional. 
                        created_at : productoDetail.created_at,
                        updated_at: productoDetail.updated_at,
                        deleted_at : productoDetail.deleted_at,
                        url: `/images/fotosProductos/${productoDetail.imagen_1}`,
                        relations : relations
                    }
                }
            )
        })
    },
    users : function (req, res){
        db.Usuario.findAll({
            include: {
                all:true
            }
        })
        .then(function(resultadoUsers){
            let admin;
            let users= [];
            resultadoUsers.forEach(function(user){
                (user.id_rol == 9) ? admin= false : admin = true;
                users.push({
                    id: user.id_usuario,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    admin: admin,
                    avatar: `/images/avatars/${user.avatar}`,
                    detail: `/api/users/${user.id_usuario}`
                })
            })
            res.status(200).json({
                //resultadoUsers
                count: users.length,
                users
            })
        })
        
    },
    userDetail : function (req, res){
        db.Usuario.findByPk(req.params.id)
        .then(function(singleUser){
            let admin;
            (singleUser.id_rol == 9) ? admin= false : admin = true;
            res.status(200).json({
                all: '/api/users',
                id: singleUser.id,
                nombre:singleUser.nombre,
                apellido:singleUser.apellido,
                email:singleUser.email,
                admin: admin,
                avatar:`/images/avatars/${singleUser.avatar}`,
                createdAt:singleUser.created_at,
                updatedAt:singleUser.updated_at,
                deletedAt:singleUser.deleted_at,
            })
        })
        
    }
}


module.exports = apiController;