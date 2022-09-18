const express = require("express")
const api = express.Router()
const agentService = require('../services/agentService');

api.get('/', async (req, res) => {
    const agents = await agentService.getAll()
    console.log(req.query)
    res.render('agents/index', 
    { 
        agents: agents.data ?? null, 
        url : "agents",
        message : req.query.message ?? null 
    })
})

api.get('/create', async (req, res) => {
    res.render('agents/create', { url : "agents" })
})

api.post('/create', async (req, res) => {
    await agentService.create(req.body)
    res.redirect('/agents?message=success')
})

module.exports = api