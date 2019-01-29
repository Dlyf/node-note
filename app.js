// const note = require('./note');
// const yargs = require('yargs');
// //console.log(note);

// var titleOptions = {
//     describe: 'Titre de la note',
//     alias: 't',
//     required: true
// };

// var bodyOptions = {
//     describe: 'Contenu de la note',
//     alias: 'b',
//     required: false
// };

// //note.savedNote([
// //  {text: 'Ménage', body: ''},
// //  {text: 'Politesse', body:'qualité toujours utile'}
// // ]);
// // var result = note.addNote('Angular', 'Framework JS côté client');
// // console.log(result);

// // var command = process.argv[3];

// //récupère le nom de la commande 
// var command = yargs.argv._[0];
// //console.log(command);

// // création du menu d'aide
// const argv = yargs
// .command('add', 'Ajoute une note', {
//     title: titleOptions,
//     body: bodyOptions
// })
// .command('list', 'Affiche la liste des notes')
// .command('read', 'Lit une note', { title: titleOptions })
// .command('remove', 'Supprime une note', { title: titleOptions })
// .help()
// .argv;

// if (command === "add") {
//     var note = notes.addNote(argv.title, argv.body);
//     if (note) {
//       console.log('Note ajoutée avec succès');
//       notes.logNote(note);
//     } else { // addNote a renvoyé false
//       console.log('Ce titre existe déjà');
//     }
//   } else if (command === 'list') {
//     var list = notes.fetchNotes();
//     if (list.length > 0) {
//       console.log('--- Liste de notes ---');
//       list.forEach(note => notes.logNote(note));
//     } else {
//       console.log('Liste vide');
//     }
//   }

const notes = require('./note');
const yargs = require('yargs');

// notes.savedNotes([
//   {title: 'Ménage', body: ''},
//   {title: 'Politesse', body: 'qualité toujours utile'}
// ]);

// var result = notes.addNote('Angular', 'Framework JS côté client');

// var command = process.argv[2];

var titleOptions = {
  describe: 'Titre de la note',
  alias: 't',
  required: true
};

var bodyOptions = {
  describe: 'Contenu de la note',
  alias: 'b',
  required: false
};

// création du menu d'aide
const argv = yargs
.command('add', 'Ajoute une note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'Affiche la liste des notes')
.command('read', 'Lit une note', { title: titleOptions })
.command('remove', 'Supprime une note', { title: titleOptions })
.help()
.argv;

// récupère le nom de la commande
var command = yargs.argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note ajoutée avec succès');
    notes.logNote(note);
  } else { // addNote a renvoyé false
    console.log('Ce titre existe déjà');
  }
} else if (command === 'list') {
  var list = notes.fetchNotes();
  if (list.length > 0) {
    console.log('--- Liste de notes ---');
    list.forEach(note => notes.logNote(note));
  } else {
    console.log('Liste vide');
  } 
} else if (command === 'read') {
// affiche une note trouvée par son titre
var note = notes.getNote(argv.title);
if (note) {
    notes.logNote(note);
} else {
    console.log('Aucune note ne correspond à ce titre');
}
} else if (command === 'remove') {
// supprime une note trouvée par son titre
var result = notes.removeNote(argv.title);
var message = result ? 'Note supprimée' : 'Aucune note trouvée pour ce titre';
console.log(message);
}