import {Pacijent} from './pacijent.js';

let p1 = new Pacijent ('Mitar', 174, 85);

p1.stampaj();

console.log (p1.bmi());

console.log(p1.kritican());

let p2 = new Pacijent ('Petar', 175, 92);

p2.stampaj();

console.log (p2.bmi());

console.log(p2.kritican());

p2.ime = 'Zvonko';
console.log(p2.ime);

let p3 = new Pacijent ('KostA', 218, 65);

p3.stampaj();
console.log(p3.bmi());


console.log(p3.kritican());

let pacijenti = [p1, p2, p3];

let ispisNajlaksi = niz => {
    let min = niz[0].tezina;
    niz.forEach(pacijent => { 
        if(pacijent.tezina < min) {
            min = pacijent.tezina;
            console.log (pacijent.ime);
        }
    });
};


ispisNajlaksi(pacijenti);

let ispisBmiNaj = niz => {
    let max = niz[0].bmi();
    niz.forEach(pac => {
        if(pac.bmi() > max) {
            max = pac.bmi();
            console.log (pac.ime, max);
        }
    });
};

ispisBmiNaj(pacijenti);

let imeA = niz => {
    niz.forEach(pac => {
        if(pac.ime.includes('A')) {
            console.log(pac.ime);
        }
    });
};

imeA(pacijenti);

let sredVis = niz => {
    let ukV = 0;
    niz.forEach(pac => {
        ukV += pac.visina;
    });
    let srVis = ukV / niz.length;
    return srVis;
}

console.log (sredVis(pacijenti));










