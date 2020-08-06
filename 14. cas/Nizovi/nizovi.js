let cars = ["volvo", "bmw", "citroen"];

console.log (cars);

console.log (cars[0]);


cars[2] = "Nissan";
cars[3] = "Audi"; // dodavanje  elementa
console.log(cars);

for (i = 0; i < cars.length; i++) {
    console.log (cars[i]);
}

//zadatak 2 

let niz = [-47, 12, -45, 42, 66];
let suma = 0;
for (i = 0; i < niz.length; i++) {
    suma += niz[i];
}

console.log (suma);

//zadatak 3

let pro = nizovi => {
    let pro = 1;
    for (i = 0; i < nizovi.length; i++) {
        pro *= nizovi[i];
    } return pro;
} 


console.log (pro(niz));

console.log (niz);
// zadatak 4

let sred = nizovi => {
    let suma = 0;
    let broj = 0;
    for (i = 0; i < nizovi.length; i++) {
        suma += nizovi[i];
        broj++;
    } return suma / broj;
}

console.log(sred(niz));


// zadatak 5

let max = maximum => {
    let maks = maximum[0];
    for (i = 1; i < maximum.length; i++) {
        if (maks < maximum [i]) {
            maks = maximum [i];
        } 
    } return maks;
}

console.log (max(niz));


// zadatak 6
let min = minimum => {
    let min = minimum[0];
    for (i = 1; i < minimum.length; i++) {
        if (min > minimum[i]) {
            min = minimum[i];
        }
    } return min;
}

console.log(min(niz));

//zadatak 7

// let index = niz.indexOf (max(niz));
// console.log (index);

// drugi nacin
let maxIndex = nekiNiz => {
   let broj = 0;
   let maks = nekiNiz[0];
    for (i = 0; i < nekiNiz.length; i++) {
        if (maks < nekiNiz[i]) {
            maks = nekiNiz[i];
            broj = i;
            
        } 
    } return broj;
    
}

let indexi = maxIndex(niz);
console.log (indexi);





//zadatak 8
// let ind = niz.indexOf (min(niz));

// console.log (ind);




// zadatak 9 

let veciOdSred = nekiNiz => {
    let s = sred(nekiNiz);
    console.log (s);
    let broj = 0;

    for (i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] > s ) {
            broj++;
        }
    } return broj;
}

console.log (veciOdSred(niz));


// zadatak 10 

let pozitiv = nekiNiz => {
    let zbir = 0;
    for (i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] >= 0) {
            zbir += nekiNiz[i];
        }
    } return zbir;
}

console.log (pozitiv(niz));

// zadatak 11

let parnih = nekiNiz => {
    let broj = 0;
    for (i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] % 2 == 0) {
            broj++;
        }
    } return broj; 
}

console.log (parnih(niz));


//zadatak 12


let parNepar = nekiNiz => {
    let broj = 0;
    for (i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] % 2 == 0 && i % 2 != 0) {
            broj++;
        }
    } return broj; 
}

console.log (parNepar(niz));


//zadatak 13
let sumaPar = nekiNiz => {
    let suma = 0;
    for (i = 0; i < nekiNiz.length; i++) {
        if (i % 2 == 0) {
            suma += nekiNiz[i];
        }
    } return suma; 
}

console.log (sumaPar(niz));


// zadatak 14
let menjamZnak = nekiNiz => {
    for (i = 0; i < nekiNiz.length; i++) {
        nekiNiz[i] = nekiNiz[i] * -1;
        
        
    } return nekiNiz;; 
}

console.log (menjamZnak(niz));

//zadatak 15

let menjamNeparPar = nekiNiz => {
    for (i = 0; i < nekiNiz.length; i++) {
        if (nekiNiz[i] % 2 != 0 && i % 2 == 0) {
            nekiNiz[i] = nekiNiz[i] * -1;
        }
    } return nekiNiz; 
}

console.log (menjamNeparPar(niz));

//zadatak 16

let shop = ["secer", "brasno", "voda", "mleko"];
let divShop = document.getElementById("shop");
let kupovina = nekiNiz => {
    for (i = 0; i < shop.length; i++) {
        divShop.innerHTML += `<ul><li>${shop[i]}<li></ul>`;
    }

}

kupovina(shop);


//zadatak 17


