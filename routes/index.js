const { Router } = require('express');
const router = Router();
 
router.use('/', require('../controllers/dashboardController.js'))
router.use('/records', require('../controllers/recordsController.js'))
router.use('/reports', require('../controllers/reportsController.js'))
router.use('/agents', require('../controllers/agentsController.js'))

module.exports = router