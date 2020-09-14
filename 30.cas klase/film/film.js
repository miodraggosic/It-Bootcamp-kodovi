export class Film {
    constructor (na, re, giz, oc) {
        this.naslov = na;
        this.reziser = re;
        this.godIzd = giz;
        this.ocena = oc;
    }
    set naslov (n) {
        this._naslov = n;
    }
    set reziser (r) {
        this._reziser = r;
    }
    set godIzd (g) {
        if(g >= 1800){
            this._godIzd = g;
        } else {
            alert('God izdanja mora biti veca od 1800');
        }
        
    }
    set ocena (o) {
            this._ocena = o;
    }

    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godIzd() {
        return this._godIzd;
    }
    get ocena () {
        return this._ocena;
    }

    stampaj() {
        console.log(this.naslov);
    }

    prosek() {
        let sum = 0;
        this.ocena.forEach(film => {
            sum += film;
        });
        return sum / this.ocena.length;
    }
}