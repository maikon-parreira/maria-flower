const { Router } = require('express');
const router = Router();

const dashboardController = require('../controllers/dashboardController.js')
const recordController   = require('../controllers/recordController.js')
const reportController   = require('../controllers/reportController.js')
const agentController    = require('../controllers/agentController.js')

router.use('/', dashboardController)
router.use('/records', recordController)
router.use('/reports', reportController)
router.use('/agents', agentController)

module.exports = router