const path = require ('path')
let carritoController = {
    carrito : function (req, res) {
        res.render('carrito',  { title: 'Caniada - Carrito' })
    }
}

module.exports = carritoController