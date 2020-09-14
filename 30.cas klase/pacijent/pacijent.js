export class Pacijent {
    constructor (ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }

    set ime(i) {
        this._ime = i;
    }
    set visina(v) {
        if (v > 0 && v < 250) {
            this._visina = v;
        } else {
            alert ('Visina mora biti izmedju 0 i 250cm');
        }
        
    }
    set tezina(t) {
        if(t > 0 && t < 550){
            this._tezina = t;
        } else {
            alert ('Tezina mora biti izmedju 0 i 550kg');
        }
        
    }

    get ime() {
        return this._ime;
    }
    get visina() {
        return this._visina;
    }
    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log (this.ime, this.visina, this.tezina);
    }

    bmi() {
        let index = Math.round ( this.tezina / (this.visina / 100)**2)
        return index;
    }

    kritican () {
        let bmi = this.bmi();
        if(bmi < 15 || bmi > 40) {
            return true;
        } else {
            return false;
        }
    }

}