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

let niz = [47, 12, 45, 42, 6];
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

let index = niz.indexOf (max(niz));
console.log (index);


//zadatak 8
let ind = niz.indexOf (min(niz));

console.log (ind);
