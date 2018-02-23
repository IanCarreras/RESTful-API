const express = require('express')
const router = express.Router()

const UserController = require('./controllers/UserController')

router.post('/add', UserController.addNewUser)
router.get('/user', UserController.getUser)
router.get('/users', UserController.getUsers)
router.delete('/deleteUser', UserController.deleteUser)
router.delete('/delete', UserController.delete)
router.put('/updateUser', UserController.updateUser)

module.exports = router
