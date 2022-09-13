const express = require("express")
const api = express.Router()
const reportService = require('../services/reportService');

api.get('/', async (req, res) => {
    const reports = await reportService.getAll()
    res.render('reports/index', { reports: reports.data, url : "reports" });
})

module.exports = api