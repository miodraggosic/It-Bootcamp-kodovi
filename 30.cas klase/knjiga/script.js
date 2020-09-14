import {Knjiga} from './knjiga.js';

let knjiga1 = new Knjiga ('Autostoperski vodic kroz galaksiju', 'Daglas Daglas Adams', 1977, 625, 800);
let knjiga2 = new Knjiga ('Hari Poter', 'Zoan Ketlin Rowling', 1997, 850, 1450 );
let knjiga3 = new Knjiga ('Hari Poter', 'Zoan Ketlin Rowling', 1997, 2001, 10500 );

let knjige = [knjiga1, knjiga2, knjiga3];

knjige.forEach(k => {
    if(k.dugackoIme()) {
        console.log( k.autor);
    }
});

knjige.forEach(k => {
    if(k.skupa() && k.obimna()) {
        k.stampaj();
    }
});

let ukupnaCena = niz => {
    let ukCena = 0;
    niz.forEach(knj => {
        ukCena += knj.cena;
    });

    return ukCena;
};

let prosecnaCena = niz =>  {
    let arsr = ukupnaCena(niz) / niz.length;
    return arsr;
};

let prosekStr = niz => {
    let uc = ukupnaCena(niz);
    let sumStr = 0;

    niz.forEach(knj => {
        sumStr += knj.brStr;
    });

    let arsStr = uc / sumStr;

    return arsStr;
};


console.log(ukupnaCena(knjige));
console.log(prosecnaCena(knjige));
console.log(prosekStr(knjige));