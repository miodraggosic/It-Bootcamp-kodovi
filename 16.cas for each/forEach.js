function ispisKonz (poruka) {
    console.log (poruka);
}

function ispisStr (poruka) {
    let divCon = document.getElementById("con");
    divCon.innerHTML = poruka;
}


function ispisNiza (niz, callbback) {
    let poruka = "";
    for (i = 0; i < niz.length; i++){
        poruka += niz[i] + " ";
    }
    callbback(poruka);
}

let a = [9, -7, 3, 4, 5];

// ispisNiza (a, ispisKonz);
// ispisNiza (a, ispisStr);


// anonimne funkcije

ispisNiza(a, (poruka) => {
    console.log (poruka);
});

ispisNiza(a, poruka => {
    let div = document.getElementById("con");
    div.innerHTML = poruka;
});
// for Each je metoda niza, i prihvata callback funkiju kao argument


function ispisElementa (elem) {
    console.log (elem);
}
a.forEach(ispisElementa);

// dr varijanta prosledjujemo anonimnu funkciju

a.forEach (elem => {
    console.log (elem);
});

a.forEach ((elem, i) => {
    console.log (i, elem);
});



//zadatak 17

let nba = ["Miami", "Orlando", "Lakers", "Boston"];

let nbaTim = niz => {
    rez = "<table> <tr>";
    niz.forEach (elem => {
        rez += `<th> ${elem} </th>`;
    });
    rez += "</tr> </table>";
    let divNba = document.getElementById("nba");
    divNba.innerHTML = rez;
}


nbaTim(nba);

//zadatak 18

let slike = ["image/slika1.jpg", "image/slika2.jpg", "image/slika3.png", "image/slika4.jpg", "image/slika5.jpg"]

let image = niz => {
    let rez = "";
    niz.forEach(elem => {
        rez += `<img style="width: 200px" src="${elem}">`;
    });
    divSlike = document.getElementById("slike");
    divSlike.innerHTML = rez;
}

image(slike);


//zadatak 19

let karaktera = niz => {
    niz.forEach (elem => {
        console.log (elem.length);
    });
};

karaktera(nba);

//zadatak 20

let karakteraMax = niz => {
    max = niz[0].length;
    niz.forEach (elem => {
        if (elem.length > max) {
            max = elem;
        }
    }); console.log(max);
};

karakteraMax(nba);

//zadatak 21

let prosek = niz => {
    let prosek = 0;
    niz.forEach (elem => {
        prosek += elem.length
    });
    prosek = prosek / niz.length;
    return prosek;
}

let veciOdProsek = niz => {
    let broj = 0;
    let p = prosek (niz);
    console.log (p);
    niz.forEach (elem => {
        if (elem.length > p) {
            broj++;
        }
    }); return broj;
}

console.log (veciOdProsek(nba));


//zadatak 24

let a1 = [2, 5, 7, 8, 9];
let b1 = [9, 0, -3, 6, -7];

let c = [];

for (i = 0; i < a1.length; i++) {
    c.push (a1[i]);
    c.push (b1[i]);
}

console.log (c);