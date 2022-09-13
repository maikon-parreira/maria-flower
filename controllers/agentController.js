const express = require("express")
const api = express.Router()
const agentService = require('../services/agentService');

api.get('/', async (req, res) => {
    const agents = await agentService.getAll()
    res.render('agents/index', { agents: agents.data, url : "agents" })
})

module.exports = api