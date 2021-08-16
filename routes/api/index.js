const router = require('express').Router();
let notes = require('../../db/db.json');
const {newNote, deleteNote} = require('../../lib/notes');
const { nanoid } = require('nanoid')

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results)
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    notes = deleteNote(req.params.id, notes);
    res.json({ok: true});
})

router.post('/notes', (req, res) =>{
    // req.body to save incoming content
    console.log(req.body);

    let note = {
        id: nanoid(),
        title: req.body.title,
        text: req.body.text
    }

    // add note to json file
    note = newNote(note, notes);
    res.json(note);
})

module.exports = router