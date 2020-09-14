export class Automobil {
    constructor (marka, model, boja, imaKrov) {
        this.marka = marka;
        this.model = model;
        this.boja = boja; 
        this.imaKrov = imaKrov;
        // this._marka = marka;
        // this._model = model;
        // this._boja = boja;
        // this._imaKrov = imaKrov;
    }
    set marka (m) {
        this._marka = m;
    }
    get marka () {
        return this._marka;
    }
    set model (m) {
        this._model = m;
    }
    get model () {
        return this._model;
    }
    set boja (b) {
        this._boja = b;
    }
    get boja () {
        return this._boja;
    }
    set imaKrov (i) {
        this._imaKrov = i;
    }
    get imaKrov () {
        return this._imaKrov;
    }
    

    sviraj() {
        console.log('Beep');
    }
}