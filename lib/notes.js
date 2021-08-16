const fs = require("fs");
const path = require("path");

function newNote(body, notesArray){
    const note = body;
    console.log(notesArray)
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    // return finished code to post route for response
    return note;
};

function deleteNote(id, notesArray){
    const deleteMe = id;
    console.log (id)
    notesArray = notesArray.filter(note => {
        if (note.id != id){
            return note
        }
    });
    console.log(notesArray)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )
    return notesArray;
}


module.exports = {
    newNote,
    deleteNote
}