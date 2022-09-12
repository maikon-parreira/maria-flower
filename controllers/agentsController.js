const express = require("express")
const api = express.Router()

api.get('/', (req, res) => {
    var dados = ['valor 1', 'valor 2', 'valor 3', 'valor 4'];
    res.render('agents/index', { dadosDaView: dados, url : "agents" });
})

module.exports = api