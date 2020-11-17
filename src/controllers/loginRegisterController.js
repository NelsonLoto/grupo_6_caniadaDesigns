const path = require ('path')
let loginRegister = {
    usuario: function (req, res) {
        res.render('loginRegister',  { title: 'Caniada - Registro' })
}
}

module.exports = loginRegister