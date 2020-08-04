let suma = function (a, b) {
    return a + b;
}

console.log (suma(5, 6));

let suma2 = (a, b) => {
    return a + b;
}

console.log (suma2 (7, 9));

let hello = () => {
    console.log ("hello world");
}

hello();

//neparan

function neparan (n) {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

let n = 12; 

if (neparan(n)) {
    console.log ("broj " + n + " je neparan");
} else {
    console.log (`broj ${n} je paran`);
}


let nepar = (n) => {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

console.log (nepar (9));



//zadatak 13

let artm = (n, m) => {
    let suma = 0;
    let broj = 0;
    for (i = n; i <= m; i++) {
        suma += i;
        broj++;
    } return suma / broj; 
} 


console.log (artm(14, 32));


//zadatak 14

let artm3 = (n, m) => {
    let suma = 0;
    let broj = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i;
            broj++;
        }
    } return suma / broj;
}


console.log (artm3 (11, 98));


//zadatak 18

let most = (t, p, n) => {
    let wait = 0;
    if (t < p) { 
        wait = 0;
    } else  {
        wait = p + n - t;
    }
    
     return wait;
}

console.log (most (16, 16, 13));



//zadatak 5 skraceno

let slika = (url) => {
    return `<img src='${url}' style='width: 300px;'>`;
}

let slika2 = (url) => `<img src='${url}' style='width: 300px;'>`

let slika3 = url => `<img src='${url}' style='width: 300px;'>`

let div = document.getElementById("slika");
div.innerHTML += slika3("fico.jpg");

div.innerHTML += slika2("fico.jpg");

