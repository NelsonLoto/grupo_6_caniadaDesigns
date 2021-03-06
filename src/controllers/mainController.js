const path = require('path')
const fs = require('fs')
const db = require('../database/models')
let nosotros = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/nosotros.json'), 'utf8'))

let mainController = {
    index :  function (req, res) {
        db.Producto.findAll({
             limit: 8,
            order: [ [ 'id_producto', 'DESC' ]]
        
        })
           
        .then (function(productosDB){
            
            res.render('home', { 
                productosDB : productosDB, 
                title: 'Caniada'})
        })
   },
   nosotros :  function (req, res) {
    res.render('templateView', {
        title: 'Caniada - Nosotros', 
        view: '/nosotros',
        nosotros
    })
    },
    homeAdmin: function(req,res){
        return res.render('templateAdmin', {
            title : 'Admin - Panel',
            view: '/admin/overview',
            
        })
    }
}

module.exports = mainController

