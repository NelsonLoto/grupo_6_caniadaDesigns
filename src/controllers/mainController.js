const path = require('path')
const fs = require('fs')


//Leyendo JSON DB
let productosDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8'))
let mainController = {
    index :  function (req, res) {
        res.render('home', { 
                                productosDB : productosDB, 
                                title: 'Caniada' })
   }
}

module.exports = mainController

