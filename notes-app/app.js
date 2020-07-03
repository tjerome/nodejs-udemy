const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title + '... ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    handler: function() {
        console.log('Removing the note.')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function() {
        console.log('Here are your notes...')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading your note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function() {
        console.log('Your note reads as follows: ')
    }
})


// Add remove read list

console.log(yargs.argv)