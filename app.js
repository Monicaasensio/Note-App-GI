//CORE MODULES
//USING JSON TO SAVE OUR NOTES (AS ARRAYS AND OBJECTS)


//NPM PACKAGES
//INITIALIZE NPM INTO OUR PROJECT (NPM INIT)
//GET RETURN VALUE BY USING REQUIRE TO LOAD IN ('') LIBRARY
//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//VARIABLE TO GET VALUE FROM PROCESS.ARGV OBJECT AND PROPERTY
//PROCESS IS AN OBJECT WITH DIFF METHODS AND PROPERTIES
//ARGV = ARGUMENT VECTOR IS AN ARRAY THAT CONTAINS ALL OF ARGS PROVIDED [2]=INDEX OF ARRAY TO GET VALUE OF COMMAND
// const command = process.argv[2]
// console.log(process.argv)


//CUSTOMIZE YARGS VERSION
yargs.version('1.1.0')

//CONFIGURING YARGS TO WORK WITH NEEDED COMMANDS
//ADD, REMOVE, READ, LIST
//CREATE ADD COMMAND YARGS.COMMAND({PROPERTIES: NAME/DESCRIBE/BUILDER/HANDLER FUNCTION})
//BUILDER IS AN OBJECT TO DEFINE THE OPTIONS THE GIVEN VALUE SUPPORTS
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
            //true makes option required by user
            //makes title a string value
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Adding a new note!', argv)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//CREATE REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builer: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notes.listNotes()
    }
})

//CALL YARGS.PARSE() TO PARSE ALL CONFIG OPTIONS WITH ALL YARGS COMMAND
// console.log(yargs.argv)
yargs.parse()






//CONDITIONALLY RUN CODE
//IF USER PROVIDES ADD WE CAN RUN CODE
// if (command === 'add') {
//     console.log('adding note')
// } else if (command === 'remove') {
//     console.log('removing note')
// }




// const message = getNotes1()
// console.log(message)
//console.log(validator.isURL('https:/google.com'))
// console.log(chalk.red.bgWhite.bold('Error!'))
// console.log(process.argv[2])


//LOAD IN THE FILE SYSTEM MODULE USING REQUIRE FUNCTION THAT NODE PROVIDES
//STORE RETURN VALUE OF REQUIRE TO VARIABLE
//const fs = require('fs')

//OBJECT.METHOD(ARG: 'NAME OF FILE', CONTEXT: 'DATA TO WRITE')
//WRITING DATA TO A FILE
//fs.writeFileSync('notes.txt', 'My name is Monica Asensio.')

//APPEND A MESSAGE TO NOTES.TXT WITH APPENDFILESYNC
//fs.appendFileSync('notes.txt', ' I am 27 years old.')

//REQUIRE FILE TO GET LOADED IN. ./ = RELATIVE PATH
//const add = require('./utils.js')
//ALL FILES HAVE THEIR OWN SCOPE WITH ITS OWN VARIABLES. UTILS.JS CANNOT ACCESS NAME VARIABLE

//const name = 'Monica'

//const sum = add(4, -2)
//console.log(sum)