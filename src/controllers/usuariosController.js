const path = require ('path')



let loginRegister = {
    login: function (req, res) {
        res.render('templateView',  { 
            title: 'Caniada - Login',
            view: '/usuario/login'
        })
    },
    register: function (req, res) {
    res.render('templateView', { 
            title: 'Caniada - Crear cuenta',
            view: '/usuario/register'
        })
}
}

module.exports = loginRegister