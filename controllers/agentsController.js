const express = require("express")
const api = express.Router()
const agentService = require('../services/agentService');

api.get('/', (req, res) => {
    const agents = agentService.getAll()
    res.render('agents/index', { agents: agents, url : "agents" });
})

module.exports = api