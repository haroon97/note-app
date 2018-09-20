console.log('Starting App')

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];
console.log('Command', command);
console.log('Yargs', argv);

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
  notes.getAll();
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