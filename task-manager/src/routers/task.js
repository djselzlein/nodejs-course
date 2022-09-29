const express = require('express')
const mongoose = require('../db/mongoose')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body)
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send('Invalid task ID')
  }
  try {
    const task = await Task.findById(_id)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isOperationAllowed = updates.every((update) => allowedUpdates.includes(update))

  if (!isOperationAllowed) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findById(req.params.id)

    updates.forEach(attr => task[attr] = req.body[attr])
    await task.save()

    if (!task) {
      return res.status(404).send()
    }
    return res.send(task)
  } catch (e) {
    return res.status(400).send(e)
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router