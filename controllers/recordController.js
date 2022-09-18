const express = require("express")
const api = express.Router()
const recordService = require('../services/recordService');

api.get('/', async (req, res) => {
    const records = await recordService.getAll()
    res.render('records/index', { records: records.data ?? null, url : "records" });
})

module.exports = api