export class Knjiga {
    constructor (nas, aut, gi, br, cena) {
        this.naslov = nas;
        this.autor = aut;
        this.godIzd = gi;
        this.brStr = br;
        this.cena = cena;    
    }

    set naslov (n) {
        this._naslov = n; 
    }
    set autor (a) {
        this._autor = a; 
    }
    set godIzd (g) {
        this._godIzd = g; 
    }
    set brStr (b) {
        this._brStr = b; 
    }
    set cena (c) {
        this._cena = c; 
    }

    get naslov(){
       return this._naslov;
    }
    get autor(){
       return this._autor;
    }
    get godIzd(){
       return this._godIzd;
    }
    get brStr(){
       return this._brStr;
    }
    get cena(){
       return this._cena;
    }

    stampaj() {
        console.log (this.naslov, this.autor, this.godIzd, this.brStr, this.cena);
    }

    obimna () {
        let br = this.brStr;
        if(br > 600) {
            return true;
        } else {
            return false;
        }
    }

    skupa () {
        let c = this.cena;
        if(c > 8000) {
            return true;
        } else {
            return false;
        }
    }

    dugackoIme () {
        let i = this.autor;
        if(i.length > 18) {
            return true;
        } else {
            return false;
        }
    }

}