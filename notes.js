//LOAD IN FS TO READ FROM THE FILE
const fs = require('fs')
const chalk = require('chalk')

// const getNotes1 = () => {
//     return 'Your notes...'
// }

//DEFINE A FUNCTION THAT GETS CALLED IN APPS.JS
//job is to get the note saved to the data store
const addNote = (title, body)  => {
    const notes = loadNotes()
    //look through array to see if notes have same title(.filter method)
    // const duplicateNotes = notes.filter(function (note) {
    //     //function runs twice to see if duplicate or not returns true = note not added, returns false, note added
    //     return note.title === title
    // })

    //shorter conscise syntax
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)


    // console.log(duplicateNote)
    // console.log(title)

    if (!duplicateNote) {
        //add new note on to the list by using push
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken.'))
    }
}

//CREATE FUNCTION TO SAVE takes in notes array
const saveNotes = (notes) => {
    //stringify data of notes array and save it to that file
    const dataJSON = JSON.stringify(notes)
    //write json data to the same file we were loading from, and what were writing in
    fs.writeFileSync('notes.json', dataJSON)
}


//LOAD IN NOTES
const loadNotes = () => {
    //defensive code to that knows how to work even if that code doesn't exist
    try {
        //read from file
        const dataBuffer = fs.readFileSync('notes.json')
        //convert to string
        const dataJSON = dataBuffer.toString()
        //parse it and return
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const allNotes = loadNotes()

    // const notesToKeep = allNotes.filter(function (note) {
    //     return note.title !== title
    // })

    //filter method to track notes
    const notesToKeep = allNotes.filter((note) => note.title !== title)

    // console.log(title)

    if (allNotes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
//call all notes
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

//export more that one thing from notes.js
module.exports = {
    // getNotes1: getNotes1,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}