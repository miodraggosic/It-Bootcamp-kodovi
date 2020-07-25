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

let d1 = 15;
let m1 = 8;
let g1 = 2001;

let d2 = 12;
let m2 = 5;
let g2 = 1998;

if (g1 < g2) {
    console.log (g1);
} 
if (g2 < g1) {
    console.log (g2)
}
     if (g1 == g2) {
        if (m1 < m2) {
            console.log (g1,m1);
        } else if (m1 == m2) {

            if (d1 < d2) {
                console.log (d1, m1, g1);
            }
            else {
                console.log (d2, m2, g2);
            }
        }
else {
    console.log (d2, m2, g2);
}
}


// zadatak 11

//radno vreme betwen 9 i 15
let rVs = 9 * 60;
console.log (rVs);

let rVk = 17 * 60;
console.log (rVk);

if (hour * 60 + min < rVs) {
    console.log ("Closed");
} else if (hour * 60 + min < rVk) {
    console.log ("Open");
} 

else {
    console.log ("Closed");
}


//zadatak 12

let lk1s = 0;
let lk2s = 21;
let lk1k = 8;
let lk2k = 5; 

// if (lk1k  < lk2s && lk1s < lk2k) {
//     console.log ("ne preklapaju se");
// } else if (lk2k  < lk1s && lk2s < lk1k) {
//     console.log ("ne preklapaju se");
// } 

// else {
//     console.log ("preklapaju se")
// }

if (lk1s < lk2s && lk1k < lk2s) {
    console.log ("ne");
} else if (lk1s > lk2s && lk1k < lk2k) {
        console.log ("da");
} else if (lk2s  < lk1s && lk2k < lk1s) {
    console.log ("ne");
} 

else {
    console.log ("da")
}




//zadatak 13

let No = 15;

if (No % 2 == 0) {
    console.log ("paran br");
} else {
    console.log ("neparan br");
}


//zadatak 14

if (No % 3 == 0) {
    console.log ("deljiv sa 3");
} else {
    console.log ("broj nije deljiv sa tri");
}

// zadatak 15
let br1 = 342;
let br2 = 182;
let veci = br1;

if (br1 == br2) {
    console.log ("jednaki brojevi")
} else if (veci < br2){
    veci = br2; 
    console.log (veci);
} else {
    console.log (veci);
}

// zadatak 16

if (br1 == 0) {
    console.log ("broj jednak nuli");
} else if (br1 <= 0) {
    br1--;
    console.log (br1);
} else {
    br1++;
    console.log (br1);
}


// zadatak 17
let broj1 = 95;
let broj2 = 48;
let broj3 = 27;
console.log (broj1,broj2,broj3);
let max1 = broj1;
let min1 = broj3;

if (max1 < broj2) {
    max1 = broj2;
}
if (max1 < broj3) {
    max1 = broj3;
}
console.log (max1);

if (min1 > broj1) {
    min1 = broj1;
}
if (min1 > broj2) {
    min1 = broj2;
}
console.log (min1);

if (broj1 != min1 && broj1 != max1) {
    console.log (broj1);
} else if (broj2 != min1 && broj2 != max1) {
    console.log (broj2);
} else {
    console.log (broj3);
}

// zadatak 18

let ceo = 15;


if (ceo % 2 == 0) {
    console.log ("broj pripada skupu celih brojeva");
} else if (ceo % 2 == 1 || ceo % 2 == -1) {
    console.log ("broj pripada skupu celih brojeva");
} else {
    console.log ("broj ne pripada skupu celih brojeva");
}

// zadatak 19







