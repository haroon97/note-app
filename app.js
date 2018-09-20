const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const noteTitle = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const noteBody = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: noteTitle,
    body: noteBody
  })
  .command('list', 'List all notes')
  .command('remove', 'Remove a note', {
    title: noteTitle
  })
  .command('read', 'Read a note', {
    title: noteTitle
  })
  .help()
  .argv;
let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note === undefined) {
    console.log('Note title already exists');
  }
  else {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }
}
else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`listing out ${allNotes.length} note(s)`);
  allNotes.forEach((note) => console.log(`Title: ${note.title}  Body: ${note.body}`))
}
else if (command === 'remove') {
  let notesRemoved = notes.removeNote(argv.title);
  let message = notesRemoved ? 'Note removed' : 'Note not found';
  console.log(message);
}
else if (command = 'read') {
  let note = notes.readNote(argv.title);
  if (note.length > 0) {
    
    console.log(`Title: ${note[0].title}`);
    console.log(`Body: ${note[0].body}`);
  }
  else {
    console.log(`Note does'nt exists`);
  }
}
else {
  console.log('Command not found');
}