// CRUD

const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  
  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectId('62d75df383f5acdbfaf8d527') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('tasks').findOne({}, { sort: { _id: -1 }}, (error, task) => {
  //   console.log('Last task ID:')
  //   console.log(task)
  // })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })
})
