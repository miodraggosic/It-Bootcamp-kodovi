function mojaFunc() {
    console.log("moja funkcija");
}

mojaFunc();

function ispisText (tekst) {
    console.log (tekst);
}


ispisText ("pravim cuda");

function ispisUser (Ime) {
    console.log(`Ulogovani korisnik je ${Ime}`)
}


ispisUser("Miodrag");

function korisnik (ime, prezime, god) {
    console.log (`korisnik je ${ime} ${prezime} ima ${god}`);
}

korisnik ("jelena", "matejic", 25);

let a = "milena";
let b = "djordjevic";

korisnik(a, b, 26);


function zbir (br1, br2) {
    let rez = br1 + br2;
    console.log (rez);
}
zbir (2, 3);
let x = 7;
let y = 9;

zbir(x, y);


//funkcija koja vraca rezultat

function zbir2 (br1, br2, br3) {
    let rez = br1 + br2 + br3;
    return rez;
}

let z = zbir2 (8,5,7);
console.log (z);

console.log (zbir2 (4,6,12));



//zadatak 3 

function neparanBr (broj) {
    if (broj % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

let nb = neparanBr(8);
console.log (nb);



function maks2 (br1, br2) {
    let veci;
    if (br1 > br2) {
        veci = br1;
        return veci;
    } else {
        veci = br2; 
        return veci;
    }
}
// drugi nacin
let maks = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}



let maks = maks2 (12, 9);
console.log (maks);



function maks4 (a,b,c,d) {
    let maks;
    if (a > b && a > c && a > d) {
        maks = a;
        return maks;
    } else if (b > maks && b > c && b > d) {
        maks = b;
        return maks;
    } else if (c > maks && c > d) {
        maks = c;
        return maks;
    } else {
        maks = d;
        return maks;
    }
}


let maksCetri = maks4(7,9,14,45);
console.log (maksCetri);

//maks4 drugo resenje

let max4 = (a,b,c,d) => {
    let m1 = maks2(a, b);
    let m2 = maks2(c,d);
    let m3 = maks2(m1, m2);
    return m3;
}

let maksN = (a, b, c, d) => maks2(maks2(a, b), maks2(c,d));

let maxN = (a, b, c, d) => maks2(maks2(maks2 (a,b),c),d);


function showPic (url) {
    let divSl = document.getElementById("slika");
    divSl.innerHTML =`<img src = "${url}">`;
   
}

showPic ("fico.jpg")


//zadatak 6


function paraColor (boja) {
    let para = document.getElementById("boja");

    para.style.color = `${boja}`;
}

paraColor ("red");


//zadatak 7 

function fontS (br) {
    let f = document.getElementById("font");

    f.style.fontSize = `${br}px`;
}

fontS (25);


//zadatak 8 

function recenica (velFonta) {
    let divFont = document.getElementById("font");
    for (let i = 0; i <= 5;i++) {
        divFont.innerHTML += `<p style="font-size: ${velFonta}px;" > Ovo je proizvoljni tekst </p>`
    }
}

recenica (32);


//zadatak 10

function deljivsa3 (n, m) {
    let broj = 0;
    for (i = n; i <= m; i++){
        if (i % 3 == 0) {
            console.log (i);
            broj++;
        }
    } return broj;
}

let deljivi = deljivsa3(1, 26);
console.log (deljivi);

//zadatak 14

function cifraTri (n, m) {
    let suma = 0;
    let broj = 0;
    let sredina;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i;
            broj++;
            console.log (i);
        } 
    } sredina = suma / broj;
    return sredina;
}


let sred = cifraTri (10, 50);
console.log (sred);


//Pilot želi da napravi program gde unosi vreme polatanja 
//(sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) 
//i vreme sletanja aviona (sat sletanja između 0 i 23 i 
//minut sletanja aviona između 0 i 59). Napisati funkciju kojoj 
//se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu
// u konzoli ispisuje koliko časova i minuta je trajao njegov let.
// Pretpostaviti da su poletanje i sletanje aviona u istom danu i
// da je ispravno uneo vrednosti poletanja i sletanja.


function vremeLeta (p1, p2, s1, s2) {
    let leteo = (s1 * 60 + s2) - (p1 * 60 + p2);
    let ukupno = Math.floor(leteo/60)+": " + leteo%60;

    return ukupno;
}

let pilotiro = vremeLeta(6, 30, 14, 30);
console.log (pilotiro);


//zadatak 2 slack

function slatkisa (j, b) {
    let jab = Math.round((j * 0.8) / 2);
    let ban = Math.round(b / 3);
    
    if (jab < ban) {
        console.log (jab);
    } else {
        console.log (ban);
    }

    
}
slatkisa (4, 5);



//zadatak 17

function plata (m,p,d) {
    suma = 0; 
    for (i = 1; i <= m; i++) {
        suma += p + (i-1) * d;

    } return suma;
}

let itplata = plata (4,1000,300);
console.log (itplata);