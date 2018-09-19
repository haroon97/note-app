console.log('starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  }
  catch (e) {

  }

  let filteredArray = notes.filter((note) => title === note.title)

  if (filteredArray.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
  else {
    console.log('Title already exists');
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