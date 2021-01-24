const path = require('path')
const fs = require('fs')
const db = require('../database/models')
let nosotros = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/nosotros.json'), 'utf8'))

let mainController = {
    index :  function (req, res) {
        db.Producto.findAll()
        .then (function(productosDB){
            res.render('home', { 
                productosDB : productosDB, 
                title: 'Caniada' })
        })
   },
   nosotros :  function (req, res) {
    res.render('templateView', {
        title: 'Caniada - Nosotros', 
        view: '/nosotros',
        nosotros
    })
}
}

module.exports = mainController

