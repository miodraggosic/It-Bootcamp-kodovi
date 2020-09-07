let getSportistiWeb = callback => {

    let req = new XMLHttpRequest();
    req.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            callback(undefined, data);
        } else if (this.readyState === 4) {
            callback('Server nije mogao da obradi zahtev', undefined);
        }
    });

    req.open('GET', 'http://localhost:3000/sportisti');
    req.send();

};

// zadatak 3
getSportistiWeb((greska, name) => {
    if (greska) {
        console.log(greska);
    } else {
        let visina = 0;
        let br = 0;
        name.forEach(player => {
            visina += player.visina;
            br++
        });
        let prosek = visina / br;
        console.log(prosek);
    }
});

//zadatak 4
getSportistiWeb((greska, name) => {
    if (greska) {
        console.log(greska);
    } else {
        let ime = '';
        let min = name[1].timovi.length;
        name.forEach(player => {
            if(player.timovi.length < min) {
                min = player.timovi.length;
                ime = player.imePrezime;
            }
            
        });
        console.log(ime);
    }
});

//zadatak 5 

getSportistiWeb((greska, name) => {
    if (greska) {
        console.log(greska);
    } else {
        name.forEach(player => {
            if(player.timovi.includes('Lakers')) {
                console.log(player.imePrezime);
            }
        });
    }
});



