// CRUD

const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  
  const db = client.db(databaseName)

  db.collection('users').insertOne({
    _id: id,
    name: 'Bob',
    age: 27
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert user')
    }
    console.log(result)
  })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28
  //   },
  //   {
  //     name: 'Gunther',
  //     age: 29
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Read article',
  //     completed: true
  //   },
  //   {
  //     description: 'Hang out',
  //     completed: false
  //   },
  //   {
  //     description: 'Do nothing',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents')
  //   }
  //   console.log(result)
  // })
})
