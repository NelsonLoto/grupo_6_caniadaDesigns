const path = require('path')
let productosController = {
    productos: function (req, res) {
        res.render('detalleproducto',  { title: 'Caniada - Productos' })
    }

}

module.exports = productosController