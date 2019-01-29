
// importer un module fs (chercher une ressource)
const fs = require('fs');

// CRUD

var savedNotes = (notes) => {
  fs.writeFileSync('note-data.json', JSON.stringify(notes))
};

var fetchNotes = () => {
  try {
    var notes = fs.readFileSync('note-data.json');
    return JSON.parse(notes);
  } catch(e) {
    return [];
  }
};

var addNote = (title, body) => {
  // récupération des notes déjà enregistrées
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  // ne pas enregistrer deux fois le même titre
  var duplicatedNotes = notes.filter(elem => elem.title === note.title);

  if (duplicatedNotes.length === 0) {
    notes.push(note);
    savedNotes(notes);
    return note; // retourne la note
  } else {
    return false;
  }
}
var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(elem => elem.title === title);
  return filteredNotes[0]; // un seul élément issu du filtre
}

var removeNote = (title) => {
  var originalNotes = fetchNotes();
  var notes = originalNotes.filter(elem => elem.title !== title);
  savedNotes(notes);
  return originalNotes.length !== notes.length; // renvoie booléen
  // permettant de savoir si une note a été supprimée
}

var logNote = (note) => {
  console.log('----------------');
  console.log(`Titre: ${note.title}`);
  console.log(`Contenu: ${note.body}`);
  console.log('----------------');
};




//créer un module
module.exports = {
  savedNotes,
  fetchNotes,
  addNote,
  getNote,
  removeNote,
  logNote
};
