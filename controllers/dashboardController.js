const express = require("express")
const api = express.Router()
const reportService = require('../services/reportService');
const recordService = require('../services/recordService');
const agentService = require('../services/agentService');



api.get('/', async (req, res) => {
    var dados = ['valor 1', 'valor 2', 'valor 3', 'valor 4'];
    const reports = await reportService.getAll()
    const agents = await agentService.getAll()
    const records = await recordService.getAll()

    dashboardCounts = {}
    dashboardCounts.reports = reports ? reports.data.length : 0
    dashboardCounts.records = records ? records.data.length : 0 
    dashboardCounts.agents  = agents  ? agents.data.length  : 0
  
    res.render('dashboard/index', { counts: dashboardCounts, url : "dashboard" });
})

module.exports = api