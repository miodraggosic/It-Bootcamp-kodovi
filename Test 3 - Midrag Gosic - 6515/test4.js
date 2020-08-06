//zadatak 1 

let n = 5;
let m = 25;
let suma = 0;
let broj = 0; 
for (let i = n; i <= m; i++) {
    if(i % 7 == 0 && i % 2 != 0){
        suma += i;
        broj++;
    }
}
console.log (suma);
console.log (broj);
console.log (suma * broj);


//zadatak 2 

function indeksTelesneMase (kg, h) {
    let bmi = kg / (h / 100)**2;
    return bmi;
}

let index = indeksTelesneMase(82, 175);
console.log (index);

if(index <= 18.5){
    console.log (`Pothranjenost ${index} manji ili jednak 18.5`);
} else if (index > 18.5 && index < 24.9) {
    console.log (`Normalna tezina ${index} je izmedju 18.5 i 24.9`);
} else if (index >= 24.9 && index <= 30) {
    console.log (`Povishena tezina ${index} je izmedju 24.9 i 30`);
} else {
    console.log (`Gojaznost ${index} je veci od 30`);
}


// zadatak 3 

function racunanje (br1, br2, z) {
    let rez;
    if (z == `+`) { 
        rez = br1 + br2;
        return rez;
    } else if (z == `-`) {
        rez = br1 - br2;
        return rez;
    } else if ( z == `*`) {
        rez = br1 * br2;
        return rez;
    } else if (z == `/`) {
        rez = br1 / br2;
        return rez;
    }
}


let kalk = racunanje(6, 3, `/`);
console.log(kalk);


//zadatak 4 

let razlika = (n, m) => {
    
    
    let parni = (n, m) => {
        let suma = 0;
        for (i = n; i <= m; i++) {
            if (i % 2 == 0 && i % 3 == 0) {
                suma += i;

            }
        } return suma;
    }

    let deljivi = (n, m) => {
        let broj = 0;
        for (i = n; i <= m; i++) {
            if (i % 10 == 3) {
                broj++;
            }
        } return broj;
    }
    return parni(n, m) - deljivi (n, m);
}



console.log (razlika(5, 35));
