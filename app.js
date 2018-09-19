console.log('Starting App')

const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];
console.log('Command', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
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