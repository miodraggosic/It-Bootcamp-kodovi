console.log (document);

console.log (typeof document);

console.log (document.URL);

console.log (document.links);
console.log (document.anchors);

let elements = document.getElementsByClassName("links");
console.log (elements);

let links = document.getElementsByTagName("a");

console.log (links);

let name = document.getElementsByName ("Link");
console.log (name);

// Prolazak kroz clanove kolekcije

for(i = 0; i < elements.length; i++) {
    console.log (elements[i]);
}

// Prolazak kroz clanove kolekcije forEach petljom nije dozvoljen ali

let elemArray = Array.from(elements);

elemArray.forEach (elem => {
    console.log (elem);
});

// query selektor navodimo kao u css i on hvata prvi takav
let query = document.querySelector("a");
let query1 = document.querySelector(".links");

console.log (query);
console.log (query1);
// vraca sve u nodelistu i dozvoljena je i for i forEach petlja
let linksDiv = document.querySelectorAll("div.links a");

console.log (linksDiv);

let para = document.querySelector ("p");
let para1 = document.getElementsByTagName ("p");
console.log (para1);
console.log (para);
let div = document.querySelector (".error");
let div1 = document.getElementsByClassName("error");
console.log (div);
let table = document.querySelector ("table tr:last-child");
console.log (table);
let atag = document.getElementsByTagName ("a");
let atag1 = document.querySelector("a");
console.log (atag);
console.log (atag1);
let slika = document.getElementsByTagName ("img");
let slika1 = document.querySelectorAll ("img");
console.log (slika);
console.log (slika1);


for (i = 0; i < atag.length; i++) {
    console.log (atag[i]);
}



for (i = 0; i < slika.length; i++) {
    console.log (slika[i]);
}

slika1.forEach (slik => {
    console.log(slik);
});

atag1.innerHTML = "novi jea link";
atag1.target = "_blank";

atag1.style.backgroundColor = "red";

atag1.setAttribute ('style', 'color: orange;')



let parag = document.querySelectorAll ("p");

parag.forEach (p => {
    p.innerHTML += "VAZNO!";
});

let divs = document.querySelectorAll ("div.error");

for (i = 0; i < divs.length; i++) {
    divs[i].innerHTML += "<h1> Greska </h1>";
}

let brParag = document.querySelectorAll("p");

brParag.forEach ((p, i) => {
    p.innerHTML += (i + 1)**2;
    p.style.color = "purple";
    if(i % 2 == 0) {
        p.style.backgroundColor = "green";
    } else {
        p.style.backgroundColor = "red";
    }
});


for (i = 0; i < slika.length; i++) {
    slika[i].alt = "Ovo su autoportreti";
}

for (i = 0; i < atag.length; i++) {
    atag[i].setAttribute ('style', 'padding: 5px; font-size: 18px; text-decoration: none;');
    if(i % 2 == 0) {
        atag[i].setAttribute ('style', 'background-color: green; color: purple;');
    } else {
        atag[i].setAttribute ('style', 'background-color: blue; color: white;');
    }
}




console.log (atag[1].parentNode);

console.log (atag[1].parentNode.childNodes);



let imena = ["Milos", "Marko", "Strahinja"];

let ispis = imena => {
    let rez = "";
    imena.forEach(name => {
        if (name[0] == "S") {
            rez += `<a href="#" target="_blank">${name}</a> `;
        } else {
            rez += `<a href="#" >${name}</a> `;
        }
    });
    let divIme = document.querySelector("div.zadnji");
    divIme.innerHTML = rez;
};

ispis(imena);






