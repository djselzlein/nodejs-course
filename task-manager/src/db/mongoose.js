const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number!')
      }
    }
  }
})

const me = new User({
  name: '  Djeison  ',
  email: 'DJ@EMAIL.COM'
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error)
})

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const study = new Task({
//   description: 'Study today',
//   completed: true
// })

// study.save().then(() => {
//   console.log(study)
// }).catch((error) => {
//   console.log('Error!', error)
// })