export class Osoba {
    constructor (i, p, g) {
        this.ime = i;
        this.prezime = p;
        this.godR = g;
    }

    set ime(i) {
        this._ime = i;
    }
    set prezime (p) {
        this._prezime = p;
    }
    set godR (g) {
        this._godR = g;
    }

    get ime() {
        return this._ime;
    }
    get prezime () {
        return this._prezime;
    }
    get godR () {
        return this._godR;
    }

    ispisOsoba () {
        console.log(`Osoba sa imenom ${this.ime} i prezimenom ${this.prezime} rodjena je ${this.godR}`);
    }
}