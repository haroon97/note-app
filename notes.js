console.log('starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }
  catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let filteredArray = notes.filter((note) => title === note.title)

  if (filteredArray.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const removeNote = (title) => {
  console.log('Removing note', title);
};

const readNote = (title) => {
  console.log('Reading note', title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};