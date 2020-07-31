let m = 1;

while (m <= 20) {
    console.log (m);
    m++;
}

// console.log (i); // jednako 11

// i = 20;

// while (i > 0) {
//     console.log (i);
//     i--;
// }

// console.log (i);


//zadatak 2 

let n = 1;
let rez = "";


while (n <= 20) {
    rez += n + ", ";
    n++;
    
}
console.log (rez);

// Zadatak 3

let i = 20;

while (i >= 1) {
    console.log (i);
    i--;
}


//zadatak 4 

let p = 20;

while (p >=1) {
    if (p % 2 == 0) {
        console.log (p);
    }
    p--;
}


//zadatak 5 

let s = 1;
let suma = 0;

while (s <= 100) {
    suma += s;
    s++;

}
console.log (suma);

//zadatak 8

let num1 = 6;
let num2 = 13;
let proizvod = 0;
while (num1 <= num2) {
    proizvod += num1 * num2;
    num1++;
} console.log (proizvod );



// zadatak 9

let br1 = 7;
let br2 = 14;
let sumaK = 0;

while (br1 <= br2) {
    sumaK += br1**2;
    br1++;
} console.log (sumaK);


//zadatak 10

let br3 = 15;
let br4 = 34;
let zbir = 0;

while (br3 <= br4) {
    if (br3 % 2 == 0) {
        zbir += br3**2;
    } else {
        zbir += br3**3;
    }
    br3++;
}
    
 console.log (zbir);


 // zadatak 11

 let k = 78;
 let l = 1; 
 let deljiv = "";
 let brDelioca = 0;
 while (l <= k) {
     if (k % l == 0) {
        deljiv += l + ", ";
        brDelioca++;
     } 
     l++;
 } console.log (deljiv, brDelioca);

 //zadatak 12

 let pbr = 85;
 let dbr = 1;



 //zadatak 14

let brN = 21;
let c = 1;
let ukupno = 0;


while (c <= brN) {
    if ((c**3 - 3*c + brN) % 7 == 0) {
        ukupno++;
    }
    c++;
} console.log (ukupno);



//zadatak 15

let brN1 = 6;
let c1 = 1;
let suma1 = 0;
let sin = Math.sin(brN1 + c1/brN1);
let int1 = 0.5;
let int2 = 0.9;


while (c1 <= brN1) {
    if (Math.sin(brN1 + c1/brN1) > int1 && Math.sin(brN1 + c1/brN1) < int2) {
        suma1++;
    }
    c1++;

} console.log (suma1);

//zadatak 16


let broj = 24;



 
 