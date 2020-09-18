import {Vozilo} from './vozilo.js';

export class Motocikl extends Vozilo {
    constructor (t, b, brT) {
        super (t, b);
        this.brojTockova = brT;
    }

    set brojTockova (br) {
        this._brojTockova = br;
    }

    get brojTockova () {
        return this._brojTockova;
    }

    ispisMoto () {
        console.log (`Tip vozila ${this.tip} boje ${this.boja} i tockova ${this.brojTockova}`);
    }
}