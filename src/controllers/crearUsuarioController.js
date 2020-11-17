const path = require('path')

let crearUsuario = {
    
    crearUsuario: function (req, res) {
        res.render('createAccount', { title: 'Caniada - Crear Usuario' })
   }
    
}
module.exports = crearUsuario