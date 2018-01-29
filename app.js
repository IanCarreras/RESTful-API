const express = require('express')
const app = express()
const db = require('./db')

const UserController = require('./controllers/UserController')
app.use('/users', UserController)

module.exports = app