import {Film} from './film.js';

let f1 = new Film ('Tenet', 'Kristofer Nolan', 2020, [6.5, 7.3, 8.2, 9.1, 6.3]);
f1.stampaj();

let f2 = new Film ('Joker', 'Todd Phillips', 1820, [6.8, 7.3, 8.2, 9.1, 10]);
let f3 = new Film ('Film3', 'Todd Phillips', 2019, [6, 7.3, 8, 9.6, 10]);

let filmovi = [f1, f2, f3];

console.log (f1.naslov);
console.log (f1.reziser);
console.log (f1.godIzd);
console.log (f1.prosek());


let vekFilmova = (niz, vek) => {
    niz.forEach(film => {
        switch (vek) {
            case 19:
                if (film.godIzd > 1800 && film.godIzd < 1900) {
                    console.log (film.naslov);
                }
                break;
            case 20:
                if (film.godIzd > 1900 && film.godIzd < 2000) {
                    console.log (film.naslov);
                }
                break;
            case 21:
                if (film.godIzd > 2000 && film.godIzd < 2100) {
                    console.log (film.naslov);
                }
                break;
        }
    });
};

vekFilmova(filmovi, 21);


let prosecnaOcena = niz => {
    let sum = 0;
    let num = 0;
    niz.forEach(film => {
        let filmOc = film.ocena;
        filmOc.forEach(ocena => {
            sum += ocena;
            num++;
        });
    });
    let avg = sum / num;
    return avg;
}

console.log(prosecnaOcena(filmovi));

let najboljeOcenjeni = niz => {
    let max = niz[0].prosek();
    let maxFilm = niz[0];
    niz.forEach(film => {
        if (film.prosek() > max){
            max = film.prosek();
            maxFilm = film;
        }
    });
    return maxFilm;
};

console.log(najboljeOcenjeni(filmovi));

let osrednjiF = niz => {
    let pro = prosecnaOcena(niz);
    let min = Math.abs(niz[0].prosek() - pro);
    let minF = niz[0];

    niz.forEach (film => {
        if (Math.abs(film.prosek() - pro) < min) {
            min = Math.abs(film.prosek() - pro);
            minF= film;
        }
    });
    return minF;
};


osrednjiF(filmovi).stampaj();

let minOcNajboljeg = niz => {
    let naj = najboljeOcenjeni(niz);
    let min = naj.ocena[0];
    naj.ocena.forEach(ocena => {
        if(ocena < min) {
            min = ocena;
        }
    });
    console.log (naj.naslov, min);
};

minOcNajboljeg(filmovi);

let nizOcena = [];

filmovi.forEach(film => {
    let fOc = film.ocena;
    fOc.forEach (o => {
        nizOcena.push(o);
    });
});

console.log(nizOcena);

let najcescaOcena = nizOcena => {

    let najUces = nizOcena[0];
    let brPon = 0;
    let tekuci;
    let brTek = 0;
    for (let i = 0; i < nizOcena.length; i++) {
        tekuci = nizOcena[i];
        brTek = 0;
        for(let j = 0; j < nizOcena.length; j++) {
            if (tekuci == nizOcena[j]) {
                brTek++;
            } 
        }
    if (brTek > brPon) {
            brPon = brTek;
            najUces = tekuci;
        }
    }
    return najUces;
};

console.log(najcescaOcena(nizOcena));

let iznadOcene = (ocena, niz) => {
    let pomFilms = [];
    niz.forEach(f => {
        let prosek = f.prosek();
        if(prosek > ocena) {
            pomFilms.push(f);
        }
    });
    return pomFilms;
}


let iznadOceneNoviji = (ocena, niz) => {
    let pomF = iznadOcene(ocena,niz);
    let najNov = pomF[0];
    let godNov = pomF[0].godIzd;

    pomF.forEach(film => {
        if (film.godIzd > godNov) {
            godNov = film.godIzd;
            najNov = film;
        }
    });
    return najNov;
};

console.log(iznadOceneNoviji(8, filmovi));





