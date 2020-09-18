import {Osoba} from './osoba.js';

 export class Zaposleni extends Osoba {
     constructor (i, p, g, pl, poz) {
         super (i, p, g);
         this.plata = pl;
         this.pozicija = poz;
     }

     set plata (p) {
         this._plata = p;
     }
     set pozicija (po) {
         this._pozicija = po;
     }

     get plata () {
         return this._plata;
     }
     get pozicija () {
         return this._pozicija;
     }

     ispisZap () {
         console.log (`Zaposleni ${this.ime} i prezimena ${this.prezime} rodjen ${this.godR} radi na poziciji ${this.pozicija} i ima platu od ${this.plata} dinara.`);
     }
}