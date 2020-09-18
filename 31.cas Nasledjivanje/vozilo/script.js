console.log ('Nasledjivanje');
import {Vozilo} from './klase/vozilo.js';
import {Automobil} from './klase/automobil.js';
import {Kamion} from './klase/kamion.js';
import {Motocikl} from './klase/motocikl.js';

import {Osoba} from './klase/osoba.js';
import {Zaposleni} from './klase/zaposleni.js';

let v1 = new Vozilo ('drumsko', 'bela');

v1.ispisiVoz();
v1.vozi();

let a1 = new Automobil('drumsko', 'crvena', 'Ni - 123');

a1.ispisiVoz();
a1.vozi();
console.log (a1.reg);
a1.ispisAuto();



let k1 = new Kamion ('drumski', 'zelen', 5.7);

k1.ispisiKamion();
k1.vozi();

let m1 = new Motocikl ('drumski', 'crvena', 3);

m1.ispisMoto();

