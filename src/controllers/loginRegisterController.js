const path = require ('path')
let loginRegister = {
    usuario: function (req, res) {
        res.sendFile(path.join(__dirname, '../views/loginRegister.html'))
}
}

module.exports = loginRegister