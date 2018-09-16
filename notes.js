const fs = require('fs')

const fetchNote = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString)
    } catch(e){
       return []
    }
}

const saveNote =( notes ) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}

addNote = (title,body) => {
    var notes = fetchNote()
    var note = {
        title,
        body
    }
    

    var duplicateNote = notes.filter((note) => note.title === title)
    if(duplicateNote.length === 0){
        notes.push(note)
        saveNote(notes)
        return note
    }else{
        console.log("duplicate title")
    }
}

readNote = (title) => {
    var notes = fetchNote();
    filterNote = notes.filter((data) => data.title === title)
    return filterNote[0]
}

removeNote = (title) => {
    var notes = fetchNote();
    var filteredNote = notes.filter((data) => data.title !== title)
    saveNote(filteredNote)
    return notes.length !== filteredNote
}

module.exports = {
    addNote,
    readNote,
    removeNote
}