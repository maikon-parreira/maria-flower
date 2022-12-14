const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv")

dotenv.config()

const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(__dirname, 'public')))

const routes = require('./routes/index.js')
app.use('/', routes) // load routing to handle all requests

app.listen(port, () => console.log(`App listening on port: ${port}`))

module.exports = app