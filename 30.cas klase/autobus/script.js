import {Autobus} from './autobus.js';

let autobus1 = new Autobus('123-43-FS', 72);
let autobus2 = new Autobus('653-37-CH', 40);
let autobus3 = new Autobus('143-62-HT', 54);

let autobusi = [autobus1, autobus2, autobus3];

let ukupSed = niz => {
    let ukp = 0;
    niz.forEach(bus => {
        ukp += bus.brSedista;
    });
    return ukp;
}

console.log(ukupSed(autobusi));

let maxSed = niz => {
    let max = niz[2].brSedista;
    let aBus;
    niz.forEach(bus => {
        if (bus.brSedista > max) {
            max = bus.brSedista;
            aBus = bus.info();
        }
    });
    return aBus;
};

maxSed(autobusi);


let ljudi = (br, niz) => {
    let uk = ukupSed(niz);
    if (br <= uk) {
        return true;
    } else {
        return false;
    }
};

console.log(ljudi(166, autobusi));



