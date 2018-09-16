const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')
const yargs = require('yargs')

const argv = yargs
            .command('add','Add a new note',{
                title:{
                    describe: 'Title of the note',
                    demand: true,
                    alias: 't'
                },
                body:{
                    describe: 'Body of the note',
                    demand: true,
                    alias: 'b'
                }
            })
            .command('remove', 'Remove a note', {
                title:{
                    describe: 'Title of the note',
                    demand: true,
                    alias: 't'
                }
            })
            .command('read', 'Read a note', {
                title:{
                    describe: 'Title of the note',
                    demand: true,
                    alias: 't'
                }
            })
            .help()
            .argv

// var command = process.argv[2]
var command = argv._[0]
// console.log('command:', command)
// console.log('Process', process.argv)
// console.log('yargs', argv) 

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body)
    console.log(note)
}else if(command === 'remove'){
    var removedNote = notes.removeNote(argv.title)
    var msg = removedNote ? "Note removed" : "Note not found"
    console.log(msg)
}else if(command === 'read'){
    var note = notes.readNote(argv.title)
    if(note){
        console.log(note)
    }else{
        console.log('Note Not Found')
    }
}else if(command === 'list'){
    console.log('Listing all nodes')
}else{
    console.log('command not recognized')
}