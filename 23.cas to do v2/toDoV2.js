let inpUnesi = document.getElementById("unesi");
let btnDodaj = document.querySelector("button");
let ulLista = document.querySelector("ul");
let liItems = document.querySelectorAll("li");
let inpPocetak = document.getElementById("dodajNaPocetak");
let inpKraj = document.getElementById("dodajNaKraj");
let nizTasks = [];
if(JSON.parse(localStorage.getItem("tasksStorage")) == null) {
    localStorage.setItem("tasksStorage", JSON.stringify(nizTasks));
}
else {
    nizTasks = JSON.parse(localStorage.getItem("tasksStorage"));
    for (i = 0; i < nizTasks.length; i++) {
        let liOldTask = document.createElement("li");
        liOldTask,textContent = nizTasks[i];
        ulLista.appendChild(liOldTask);
    }
}


btnDodaj.addEventListener("click", event => {
    event.preventDefault();
    let inp = inpUnesi.value;

    if (inp == "" || inp == null) {
        alert("Unesite textualni sadrzaj")
    } else {
        let li = document.createElement("li");
        li.textContent = inp;
        nizTasks.push(inp);
        localStorage.setItem("tasksStorage", JSON.stringify(nizTasks));
        let radio = document.querySelector("input[name=dodaj]:checked")
        if (radio.id == "dodajNaPocetak") {
            ulLista.prepend(li);
        } else {
            ulLista.appendChild(li);
        }
    }
    inpUnesi.value = "";
});

// liItems.forEach(li => {
//     li.addEventListener("click", event => {
//         event.target.remove();
//     });
// })

ulLista.addEventListener("click", event => {
    if(event.target.tagName == "LI"){
        event.target.remove();
        let index = nizTasks.indexOf(event.target.textContent);
        nizTasks.splice(index, 1);
        localStorage.setItem("tasksStorage", JSON.stringify(nizTasks));

    }
});


//////////////////////////////////////////////
//Local storage

let h = document.querySelector("h1");

//smestanje elementa u lokal storage
//localStorage.setItem(key, value);
localStorage.setItem("userName", "Miodrag");
localStorage.setItem("Grad", "Pirot");
localStorage.setItem("userName", "Milos");

//vracanje elementa iz lokal storage

let getUserName = localStorage.getItem("userName");//prema kljucu uzimamo;
console.log(getUserName);

