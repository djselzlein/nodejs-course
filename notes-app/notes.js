const fs = require('fs')
const chalk = require('chalk')

const add = (title, body) => {
  const notes = load()
  const dupe = notes.find(note => note.title === title)

  if (!dupe) {
    notes.push({title, body})
    saveNotes(notes)
    console.log('Note added!')
  } else {
    console.log('Note already taken!')
  }
}

const remove = title => {
  const notes = load()
  const notesToKeep = notes.filter(note => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const list = () => {
  console.log(chalk.inverse('Your notes:'))
  const notes = load()
  notes.forEach(note => console.log(chalk.green(note.title)))
}

const read = title => {
  const note = load().find(note => note.title === title)

  if (note) {
    console.log(chalk.green.inverse('Title: ' + note.title))
    console.log('Body: ' + note.body)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', notesJSON)
}

const load = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json')
    const notesJSON = notesBuffer.toString()
    return JSON.parse(notesJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  add,
  remove,
  list,
  read
}