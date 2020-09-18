// console.log(db);

//Pristup kolekciji

let kolekt1 = db.collection('customers');
console.log(kolekt1);

let dokument1 = kolekt1.doc('mpetrovic');

console.log(dokument1);

let dokument2 = db.collection('customers').doc('nkostic');

//Pristup dokumentu direktno

let d3 = db.doc('customers/pnikolic');
console.log(d3);

/* Kod dokumenata imamo sledece metode
    CRUD (create, read, updaate, delete)
    document.set(...) => Postavlja polja (create)
    document.get(...) => Dohvata vrednosti polja (read)
    document.update(...) => (update)
    document.delelte(...) => (delete)
    Sve cetiri metode kao rezultat vracaju PROMISE
    Nakon poziva ovih metoda koristimo then i catch
*/


// Dodavanje novog dokumenta

let c2 = {
    name: 'Goran',
    age: 45,
    addresses: ['ul1', 'ul2', 'ul3'],
    salary: 550.25
};

// db.collection('customers').doc('gkicic').set(c2).then(() => {
//     console.log('Customer succesfully added');
// }).catch(error => {
//     console.log(`Cannot add document: ${error}`);
// });

// dodavanje  novog doc bez zadavanja id-a

let c3 = {
    name: 'Mika',
    age: 27,
    addresses: ['ul1', 'ul2'],
    salary: 440.32
};

// db.collection('customers').doc().set(c3).then(() => {
//     console.log('Customer succesfully added');
// }).catch(error => {
//     console.log(`Cannot add document: ${error}`);
// });
let dodati = {
    grad: 'Nis',
    opstina: "Palilula"
}
let opcija = {
    merge: true,
}

db.collection('customers').doc('gkicic').set(dodati,opcija).then(() => {
        console.log('Customer succesfully added');
    }).catch(error => {
        console.log(`Cannot add document: ${error}`);
    });

// Dodavanje dokumenta sa timestamp poljima
let datum1 = new Date("2020-09-15 10:00:00");
let datum2 = new Date("2020-09-15 12:00:00");

let task = {
    name: 'fudbal',
    priority: false,
    description: 'mali fuz',
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
};

db.collection('tasks').doc('task1').set(task).then(() => {
    console.log('Task succesfully added');
}).catch(error => {
    console.log(`Cannot add task: ${error}`);
});


let taskUpdate = {
    description: 'Fudbal sa drustvom',
}

db.collection('tasks').doc('task1').update(taskUpdate).then(() => {
    console.log('Task succesfully updated');
}).catch(error => {
    console.log(`Cannot update task: ${error}`);
});

//brisanje dokumenta
db.collection('tasks').doc('task1').delete().then(() => {
    console.log('Task succesfully deleted');
}).catch(error => {
    console.log(`Cannot delete task: ${error}`);
});

db.collection('tasks').doc('sljve').update({
    priority: firebase.firestore.FieldValue.delete()
}).then(() => {
    console.log('Task field succesfully updated');
}).catch(error => {
    console.log(`Cannot update task field: ${error}`);
});


// 20. slajd
let movie1 = {
    name: 'Ko to tamo peva',
    direktor: {
        name: 'Petar',
        surname: 'Petrovic',
    },
    realease_year: 1965,
    genres: ['komedija', 'drama'],
    rating: 9.65,
};

let movie2 = {
    name: 'Maratonci',
    direktor: {
        name: 'Nikola',
        surname: 'Petrovic',
    },
    realease_year: 1975,
    genres: ['komedija', 'drama'],
    rating: 9.85,
};

let movie3 = {
    name: 'Decko koji obecava',
    direktor: {
        name: 'Marko',
        surname: 'Petrovic',
    },
    realease_year: 1986,
    genres: ['komedija', 'drama'],
    rating: 9.25,
};

db.collection('movies').doc('film1').set(movie1).then(() => {
    console.log('Movie succesfully added');
}).catch(error => {
    console.log(`Cannot add movie: ${error}`);
});

db.collection('movies').doc('film2').set(movie2).then(() => {
    console.log('Movie succesfully added');
}).catch(error => {
    console.log(`Cannot add movie: ${error}`);
});

db.collection('movies').doc('film3').set(movie3).then(() => {
    console.log('Movie succesfully added');
}).catch(error => {
    console.log(`Cannot add movie: ${error}`);
});


// Update

let mov1Update = {
    name: 'Who is singing over there?',
    realease_year: 1980,
    direktor: {
        name: 'Slobodan',
        surname: 'Shijan',
    },
    rating: 8.90,

};

db.collection('movies').doc('film1').update(mov1Update).then(() => {
    console.log('Movie 1 succesfully updated');
}).catch(error => {
    console.log(`Cannot update movie: ${error}`);
});

let mov2Update = {
    name: 'Maratonci trce pocasni krug',
    direktor: {
        name: 'Slobodan',
        surname: 'Shijan',
    },
    realease_year: 1982,
    rating: 9.00,
};

db.collection('movies').doc('film2').update(mov2Update).then(() => {
    console.log('Movie 2 succesfully updated');
}).catch(error => {
    console.log(`Cannot update movie: ${error}`);
});

let mov3Update = {
    direktor: {
        name: 'Milos',
        surname: 'Radivojevic',
    },
    genres: firebase.firestore.FieldValue.arrayUnion('music'),
    realease_year: 1981,
    rating: 7.9,
};

db.collection('movies').doc('film3').update(mov3Update).then(() => {
    console.log('Movie 3 succesfully updated');
}).catch(error => {
    console.log(`Cannot update movie: ${error}`);
});