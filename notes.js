console.log('starting notes.js');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
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