export class Vozilo {
    constructor (tip, boja) {
        this.tip = tip;
        this.boja = boja;
    }
    set tip(t) {
        this._tip = t;
    }
    set boja (b) {
        this._boja = b;
    }

    get tip() {
        return this._tip;
    }
    get boja() {
        return this._boja;
    }

    ispisiVoz () {
        console.log (`Vozilo tipa: ${this.tip} i boje ${this.boja} `);
    }

    vozi () {
        console.log ('vozilo u pokretu');
    }
}