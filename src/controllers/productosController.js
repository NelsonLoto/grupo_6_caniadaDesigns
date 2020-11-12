const path = require('path')
let productosController = {
    productos: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/detalleProducto.html'))
    }

}

module.exports = productosController