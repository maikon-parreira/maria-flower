 const express = require('express')
 const router = express.Router()
 
/* router.get('/', (req, res) => {
    var dados = ['valor 1', 'valor 2', 'valor 3', 'valor 4'];
    res.render('dashboard/index', { dadosDaView: dados });
 }) */

router.use('/', require('../controllers/dashboardController.js'))
router.use('/records', require('../controllers/recordsController.js'))
router.use('/reports', require('../controllers/reportsController.js'))
router.use('/agents', require('../controllers/agentsController.js'))

module.exports = router