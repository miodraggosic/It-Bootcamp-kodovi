import {Vozilo} from './vozilo.js';

export class Automobil extends Vozilo {

    constructor (t, b, reg) {
        super(t, b); 
        this.reg = reg;

    }

    set reg (r) {
        this._reg = r; 
    }
    get reg () {
        return this._reg
    }

    ispisAuto () {
        // i roditeljskim parametrima pristupamo preko this
        console.log (this.tip);
    }
}