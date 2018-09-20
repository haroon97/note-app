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
    console.log('Title already exists');
  }
  else {
    console.log('Title', note.title);
  }
}
else if (command === 'list') {
  notes.getAll();
}
else if (command === 'remove') {
  notes.removeNote(argv.title);
}
else if (command = 'read') {
  notes.readNote(argv.title);
}
else {
  console.log('Command not found');
}