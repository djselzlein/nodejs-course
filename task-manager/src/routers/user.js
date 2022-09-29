const express = require('express')
const mongoose = require('../db/mongoose')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user)
  } catch (e) {
    res.status(400).send()
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send('Invalid user ID')
  }
  try {
    const user = await User.findById(_id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isOperationAllowed = updates.every((update) => allowedUpdates.includes(update))

  if (!isOperationAllowed) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await User.findById(req.params.id)

    updates.forEach(attr => user[attr] = req.body[attr])
    await user.save()

    if (!user) {
      return res.status(404).send()
    }
    return res.send(user)
  } catch (e) {
    return res.status(400).send(e)
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router