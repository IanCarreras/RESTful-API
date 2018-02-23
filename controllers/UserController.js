const User = require('../models/User')

exports.addNewUser = (req, res) => {
  const { name, email, password } = req.body
  const record = new User({
    name,
    email,
    password
  })
  record.save(err => {
    if (err) return res.status(500).send({ success: false })
    res.status(200).send(record)
  })
}

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({ success: false })
    res.status(200).send(users)
  })
}

exports.getUser = (req, res) => {
  User.findById( req.params.id, (err, user) => {
    if (err) return res.status(500).send({ success: false })
    if (!user) return res.status(404).send({ success: false, msg: 'user not found'})
    res.status(200).send(user)
  })
}

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove( req.params.id, (err, user) => {
    if (err) return res.status(500).send({ success: false })
    res.status(200).send({ success: true, msg: 'User ' + user.name + ' was deleted.'})
  })
}

exports.delete = (req, res) => {
  User.remove({}, err => {
    if (err) return res.send({ msg: 'error deleting DB', success: flase })
    res.send({ success: true, msg: 'deleted everything!' })
  })
}

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate( req.params.id, req.body, {new: true}, (err, user) => {
    if (err) return res.status(500).send({ success: false })
    res.status(200).send(user)
  })
}
