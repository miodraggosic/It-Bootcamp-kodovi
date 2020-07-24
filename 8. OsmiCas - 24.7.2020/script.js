// let a = 3;
// let b = 4;


// if (a < b) {
//     console.log (`${a} je manje od ${b}`)
// } else {
//     console.log (a + " je" + " vece od " + b);
// }



// let x = 5;
// let y = 6;

// if (x == y) {
//     console.log (x + " i " + y + " su jednake vrednosti");
// }
// // if else struktura


// if (x === y) {
//     console.log (x + " i " + y + " su jednaki po tipu i vrednosti");
// }

// else {
//     console.log (x + " i " + y + " nisu jednaki po tipu i vrednosti");
// }


// // dali su vrednosti jednake

// if (x == y) {
//     console.log ("jednake su");
// } else {
//     console.log ("nisu jednake");
// }



// vezba 1

// zadatak1


let n = 3;
let m = 5;

if (n >= m) {
    console.log (n + " je veci broj od " + m);
} else {
    console.log (m + " je manji broj od " + n);
}

// zadatak 2 

let temp = -24;

if (temp >= 0) {
    console.log ("temperatura je u plusu");
} else {
    console.log ("temperatura je u minusu");
}


// zadatak 3
let divpol = document.getElementById("pol");
let pol = "m";
// let izbor1 = document.getElementsById ("Male");
// let izbor2 = document.getElementsById ("Fame");

if (document.getElementById("Male").checked) {
    // Muski pol
    divpol.innerHTML = '<img src="male.png">';
} else if (document.getElementById("Male").checked) {
    //Zenski pol
    divpol.innerHTML = '<img src="person.png">';
}


// zadatak 4

let date = new Date ();
let hour = date.getHours ();
let min = date.getMinutes ();

if (hour >= 12) {
    console.log ("dobar dan");
} else {
    console.log ("dobro jutro")
}


//zadatak 5

let y = date.getFullYear ();
let month = date.getMonth ();
month++;
console.log (y, month);
let bYear = 2003;
let bMonth = 8;

if ((y - bYear) * 12 + (12 - bMonth) + month >= 216) {
    console.log ("osoba je punoletna");
} else {
    console.log ("osoba je maloletna")
}

//zadatak 6

let prvi = 45;
let drugi = 65;
let treci = 445;

//pretpostavka
let high = prvi;

if (drugi > high ) {
    high = drugi;
} 
if (treci > high) {
    treci = high;
}

console.log (high);

//zadatak 7
let poeni = 67;

if (poeni < 50) {
    console.log ("pali ste ispit")
}
   else if (poeni <= 60) {
    console.log ("ocena " + 6);
}  else if (poeni <= 70) {
    console.log ("ocena " + 7);
}  else if (poeni <= 80) {
    console.log ("ocena " + 8);
}  else if (poeni <= 90) {
    console.log ("ocena " + 9);
}  else if (poeni < 100) {
    console.log ("ocena " + 10);
} else {
    console.log ("vi ste genije")
}


//zadatak 8 

let dan = date.getDay();

console.log (dan);

if (dan <= 5) {
    console.log ('radna ned');
} else {
    console.log ("prijatan vikend");
}


//zadatak 9

if (hour < 12) {
    console.log ("dobro jutro");
} else if (hour <= 18) {
    console.log ("dobro dan");
} else {
    console.log ("dobro vece");
}


//zadatak 10

let d1 = 24;
let m1 = 10;
let g1 = 1998;

let d2 = 12;
let m2 = 8;
let g2 = 1998;

if (g1 < g2) {
    console.log (g1);
} else if (g1 == g2) {
    if (m1 < m2) {
        console.log (g1,m1);
    } else if (m1 == m2) {
        if (d1 < d2) {
            console.log (d1, m1, g1);
        }
    }
} else {
    console.log (d2, m2, g2);
}
    // } else  { 
    //     if (d1 < d2) {
    //         console.log (d1, m1, g1);
    //     } else {
    //         console.log (d2, m2, g2);
    //     }
    //  
