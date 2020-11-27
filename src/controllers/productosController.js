// Requiriendo módulos
const path = require('path')
const fs = require('fs')


//Leyendo JSON DB
let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8'))

//Leyendo CATEGORIAS JSON DB para pasarle a los SELECTs 
let categoriasDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/categoriasProductos.json'), 'utf8'))

const categoriaDB = categoriasDB[0]
const generoDB = categoriasDB[1]
const coloresDB = categoriasDB[2]
const tallesDB = categoriasDB[3]
 
let skuDisponible = productosDB.length+1



//Funcionalidad

let productosController = {
    productos: function (req, res) {    
            res.render('productos', {
                                    title: 'Caniada - Productos', 
                                    productosDB : productosDB})
    },
    crearView : function (req, res){ //Ruta por GET para llegar a la carga.
            res.render ('crearProducto', { title: 'Caniada - Crear Producto',skuDisponible})
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
           return res.render('detalleProducto', {
                                                    productoSKU: productosDB[i], 
                                                    title : productosDB[i].nombre, 
                                                    productosDB : productosDB})
            }
        }
        res.redirect('/productos/0')
    },
    editarView : function (req, res){
        for (let i = 0; i < productosDB.length; i++) {
            if (req.params.sku == productosDB[i].sku){
                return res.render('editarProducto',
                    {title: 'Caniada - Editar producto',
                    categoria: productosDB[i].categoria,
                    genero: productosDB[i].genero ,
                    nombre: productosDB[i].nombre,
                    color: productosDB[i].color,
                    talle: productosDB[i].talle,
                    cantidad: productosDB[i].cantidad,
                    precio: productosDB[i].precio,
                    descripcion: productosDB[i].descripcion,
                    modelo: productosDB[i].modelo,
                    composicion: productosDB[i].composicion,
                    sku: productosDB[i].sku,
                    fotoProducto: productosDB[i].fotoProducto,
                    categoriaDB,
                    generoDB ,
                    coloresDB,
                    tallesDB,
                        })
            }
        }
    },
    editarSave : function(req, res){
        
        
        //ELIMINANDO VERSIÓN ANTIGUA
        for (let i = 0; i < productosDB.length; i++) {
            if (req.params.sku == productosDB[i].sku){
                productosDB.splice([i],1)

            }
    }
        
    //CREANDO VERSIÓN NUEVA
      
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
        fotoProducto: req.body.fotoProducto // viaja en el body porque esta en un input 
    }
        
            productosDB.push(productoCargado);

        fs.writeFileSync(path.join(__dirname, '../database/productos.json'), JSON.stringify(productosDB, null, 4));
        res.redirect('/productos/crear/success')
}
}

module.exports = productosController