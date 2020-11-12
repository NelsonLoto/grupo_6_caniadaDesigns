const path = require('path')

let crearUsuario = {
    
    crearUsuario: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/createAccount.html'))
   }
    
}
module.exports = crearUsuario