import {Vozilo} from './vozilo.js';

export class Kamion extends Vozilo {
    constructor (t, b, nos) {
        super(t, b);
        this.nosivost = nos;
    }


    set nosivost (n) {
        this._nosivost = n;
    }

    get nosivost(){
        return this._nosivost;
    }

    ispisiKamion () {
        console.log (`Kamion tipa ${this.tip} i boje ${this.boja} i nosivosti ${this.nosivost}`);
    }
}