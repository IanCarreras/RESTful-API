const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const UserController = require('./controllers/UserController')
app.use('/users', UserController)

module.exports = app
