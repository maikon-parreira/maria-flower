 const express = require('express')
 const router = express.Router()
 
 router.get('/', (req, res) => {
    var dados = ['valor 1', 'valor 2', 'valor 3', 'valor 4'];
    res.render('myView', { dadosDaView: dados });
 })
 
//router.use('/about', require('../controllers/about.js'))
module.exports = router