let div = document.getElementById('ispis');

// Dodavanje dokumenata get

let doc1 = db.collection('customers').doc('nkostic');

// doc1.get()
// .then(doc => {
//     console.log(doc.id, doc.exists);
//     if(doc.exists) {
//         let data = doc.data();
//         console.log(data);
//     } else {
//         console.log(`No doc with id ${doc.id}`);
//     }
// }).catch(err => {
//     console.log(err);
// });

// // dohvatanje svih dokumenata iz kolekcije

// db.collection('customers').get()
// .then(snapShot => {
//     console.log(snapShot);
//     if(!snapShot.empty) {
//         console.log (`Getting collection, total ${snapShot.size} docs.` );
//         let allDocs = snapShot.docs;
//         allDocs.forEach(doc => {
//             console.log (doc.id, doc.data());
//         });
//     } else {
//         console.log ('No documents to collect');
//     }
// }).catch(err => {
//     console.log (`Cannot get docs ${err}`);
// });

// dohvatanje kolekcije movies

db.collection('movies').orderBy('realease_year').get().then(snapShot => {
    if(!snapShot.empty) {
        let allDoc = snapShot.docs;
        allDoc.forEach(doc => {
            let docs = doc.data();
            let div1 = document.createElement('div');
            div1.textContent = docs.name;
            let par1 = document.createElement('p');
            let par2 = document.createElement('p');
            div1.appendChild(par1);
            div1.appendChild(par2);
            par1.textContent = docs.direktor.name;
            par1.textContent += ` ${docs.direktor.surname} `;
            par2.textContent = ` ${docs.realease_year} `;
            let genres = docs.genres.join(', ');
            par2.textContent += genres;

            div.appendChild(div1);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

// orderBy

// db.collection('customers').where('salary', '>=', 600).get()
// .then(snapShot => {
//     if(!snapShot.empty) {
//         let allDocs = snapShot.docs;
//         console.log(allDocs);
//         allDocs.forEach(doc => {
//             console.log (doc.id, doc.data());
//         });
//     } else {
//         console.log ('No documents to collect');
//     }
// }).catch(err => {
//     console.log (`Cannot get docs ${err}`);
// });

// prikaz ogranicenog broja dokumenata limit ()

// db.collection('customers').orderBy('salary').limit(3).get()
// .then(snapShot => {
//     console.log(snapShot);
//     if(!snapShot.empty) {
//         let allDocs = snapShot.docs;
//         allDocs.forEach(doc => {
//             console.log (doc.id, doc.data());
//         });
//     } else {
//         console.log ('No documents to collect');
//     }
// }).catch(err => {
//     console.log (`Cannot get docs ${err}`);
// });

// filtriranje dokumenata

db.collection('customers').where('salary', '>=', 600).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});


db.collection('customers').where('addresses', 'array-contains', 'Vojvode Tankosica').get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (`Korisnik koji zivi na adresi ${doc.id}`);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('customers').where('salary', '>', 500).where('salary', '<', 900).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (`Korisnici ima platu izmedju 500 i 900e ${doc.id}`);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('customers').where('salary', '>', 500).where('age', '==', 33).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (`Korisnici ima platu vecu od 500 i 33 god ${doc.id}`);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});


db.collection('customers').where('addresses', 'array-contains-any', ["ul1", "ul2"]).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (`Korisnik ima adrese  ${doc.id}`);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('customers').where('age', 'in', [22, 25, 28]).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (`Korisnik ima godina  ${doc.id}`);
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

// kolekcija tasks

db.collection('tasks').orderBy('title', 'asc').get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('tasks').where('priority', '==', true) .get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        console.log(allDocs);
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});
let date = new Date();
let date1 = new Date(2020, 0, 1);
let date2 = new Date(2021, 0, 1);
let d1Ts = firebase.firestore.Timestamp.fromDate(date1);
let d2Ts = firebase.firestore.Timestamp.fromDate(date2);

db.collection('tasks').where('due date', '>=', date1).where('due date', '<', date2).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('tasks').where('due date', '<=', date).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});

db.collection('tasks').where('start date', '>', date).get()
.then(snapShot => {
    if(!snapShot.empty) {
        let allDocs = snapShot.docs;
        allDocs.forEach(doc => {
            console.log (doc.id, doc.data());
        });
    } else {
        console.log ('No documents to collect');
    }
}).catch(err => {
    console.log (`Cannot get docs ${err}`);
});
