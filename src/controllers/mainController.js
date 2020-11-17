const path = require('path')
let mainController = {
    index :  function (req, res) {
        res.render('index', { title: 'Caniada' })
   }
}

module.exports = mainController

