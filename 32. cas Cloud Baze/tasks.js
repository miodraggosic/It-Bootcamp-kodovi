let ul = document.querySelector('ul');
let form = document.querySelector('form');


// db.collection('tasks').orderBy('start date', 'desc').get()
// .then(snapShot => {
//     snapShot.forEach(doc => {
//         let obj = doc.data();
//         let li = document.createElement('li');
//         li.innerHTML = `${obj.title} (${obj.startdate}) (${obj.description})`;
//         ul.appendChild(li);
//     });
// })
// .catch();

db.collection('tasks').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        // console.log(change); 
        //change.type - tip promene dokumenta ('added, 'removed)
        //change.doc - dokument na koji se odnosi promena
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;

        if(type == "added") {
            let obj = doc.data();
            let li = document.createElement('li');
            li.innerHTML = `${obj.title} (${obj.startdate}) (${obj.description})`;
            ul.appendChild(li);
            li.setAttribute('data-id', id);
            let btn = document.createElement('button');
            btn.innerHTML = 'delete task';
            li.appendChild(btn);
        } else if (type == 'removed') {
            let lis = document.querySelectorAll("li");
            lis.forEach(li => {
                if(li.getAttribute('data-id') == id) {
                    li.remove();
                }
            });
        }
    });
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let title = this.title.value;
    let stDate = new Date(this.start_date.value);
    let dDate = new Date(this.due_date.value);
    let priority = false;
    if(this.priority.checked) {
        priority = true;
    }
    let desc = this.description.value;
    

    let task = {
        title: title,
        start_date: firebase.firestore.Timestamp.fromDate(stDate),
        due_date: firebase.firestore.Timestamp.fromDate(dDate),
        priority: priority,
        description: desc,
    };
    db.collection('tasks').doc().set(task).then(() => {
        alert('uspesno kreiran task');
    }).catch(err => {
        alert('greska pri kreiranju taska');
    });
});

ul.addEventListener('click', event => {
    if(event.target.tagName == 'BUTTON') {
        let id = event.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('tasks').doc(id)
        .delete()
        .then(() => {
            alert('Task uspesno obrisan!');
        })
        .catch(err => {
            alert(`Greska pri brisanju taska: ${err}`);
        });
    }
});