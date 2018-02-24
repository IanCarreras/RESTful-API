const express = require('express')
const router = express.Router()

const UserController = require('./controllers/UserController')

router.post('/user', UserController.addNewUser)
router.get('/user/:id', UserController.getUser)
router.get('/user', UserController.getUsers)
router.delete('/user/:id', UserController.deleteUser)
router.delete('/delete', UserController.delete)
router.put('/user/:id', UserController.updateUser)

module.exports = router
