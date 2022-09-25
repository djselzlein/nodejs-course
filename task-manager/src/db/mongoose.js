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
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password can not contain "password"!')
      }
    }
  },
})

// const me = new User({
//   name: '  Djeison  ',
//   email: 'DJ@EMAIL.COM',
//   password: 'abcdef12'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const study = new Task({
  description: '      Study today',
  completed: true
})

study.save().then(() => {
  console.log(study)
}).catch((error) => {
  console.log('Error!', error)
})