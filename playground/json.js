// let obj = {
//   name: 'Haroon'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// let personString = '{"name": "Haroon", "age": 21}';
// let personParse = JSON.parse(personString);

// console.log(personParse);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);

console.log(typeof(note));
console.log(note.title);