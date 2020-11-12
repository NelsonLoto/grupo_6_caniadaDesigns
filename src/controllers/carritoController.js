const path = require ('path')
let carritoController = {
    carrito : function (req, res) {
        res.sendFile(path.join(__dirname, '../views/carrito.html'))
    }
}

module.exports = carritoController