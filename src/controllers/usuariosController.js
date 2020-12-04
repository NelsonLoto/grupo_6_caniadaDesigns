const path = require ('path')



let loginRegister = {
    login: function (req, res) {
        res.render('loginRegister',  { title: 'Caniada - Registro' })
    },
    register: function (req, res) {
    res.render('loginRegister', { title: 'Caniada - Crear Usuario' })
}
}

module.exports = loginRegister