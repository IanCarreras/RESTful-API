const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', require('./routes'))

module.exports = app
