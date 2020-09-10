class Automobil {
    constructor (marka, model, boja, imaKrov) {
        this._marka = marka;
        this._model = model;
        this._boja = boja;
        this._imaKrov = imaKrov;
    }

    sviraj() {
        console.log('Beep');
    }
}

let auto1 = new Automobil('opel', 'zafira', 'bela', true);

auto1.sviraj();
console.log (auto1._marka, auto1._model);

let auto2 = new Automobil ('suziki', 'ignis', 'plava', true);

auto2.sviraj();