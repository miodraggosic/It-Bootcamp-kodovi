
 

let divSlike = document.getElementById("slike");
let i;
for (i = 1; i <= 3;i++ ) {
    if (i%3 == 1){
    divSlike.innerHTML += '<img src="cifra 1.jfif">';
    } else if (i%3 == 2) {
        divSlike.innerHTML += '<img src="cifra 2.jfif">';
    } else {
        divSlike.innerHTML += '<img src="cifra 3.jfif">';
    }
}

//zadatak 12


let p = 20;
let h = 100;
let proizvod = 1;

for (p = 20; p <= 100; p++) {
    if (p % 11 == 0){
        proizvod = proizvod * p;
    }
}  console.log (proizvod);



//zadatak 15

let n = -17;
let m = 22;

let brojPoz = 0;
let brojNeg = 0;

for (i = n; i <= m; i++) {
    if (i >= 0) {
        brojPoz += 1 
    } else if (i < 0) {
        brojNeg += 1;
    }
} console.log (brojPoz, brojNeg);


//zadatak 14

let o = 45;
let b = 96;
let z;
let suma = 0;
let count = 0;
for (z = o; z <= b; z++) {
    count += 1;
    suma += z; 
} console.log (suma / count);


//zadatak 16

let j = 5;
let k = 50;
let zbir = 0;

for (z = j; z <= k; z++) {
    if (z % 3 == 0 || z % 5 == 0) {
        zbir += 1;
    }
} console.log (zbir);

//zadatak 17

//da je moduo 10 jednako 4


//zadatak 21

let d = 14;
let q = 39;

let a = 13;

let proiz = 1;

for (z = d; z <= q; z++) {
    if (z % a == 0) {
        proiz *= z;
    }
} console.log (proiz);


//zadatak 20

let l = 5;
let f = 15;

let x = 3;

let sumarum = 0;


for (z = l; z <= f; z++) {
    if (z % x != 0 ) {
        console.log(z);
        sumarum += z;
    }
} console.log (sumarum);







