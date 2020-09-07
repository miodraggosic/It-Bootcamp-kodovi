console.log(1);
console.log(2);

setTimeout(() => {
    console.log("pozvali smo callback funkciju");
}, 1000)
console.log(3);
console.log(4);

let request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         let data = JSON.parse(request.responseText);
//         console.log(data);
//     }
// });

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
    } else if (request.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
console.log('poruka');

//zadatak 2;

let req = new XMLHttpRequest();
req.addEventListener('readystatechange', () => {
    if (req.readyState === 4 && req.status === 200) {
        let data = JSON.parse(req.responseText);
        data.forEach(user => {
            if (user.website.includes('.com')) {
                console.log(user.name);
            }
        });
    } else if (request.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.send();

//zadatak 3 

let req1 = new XMLHttpRequest();
req1.addEventListener('readystatechange', () => {
    if (req1.readyState === 4 && req1.status === 200) {
        let data = JSON.parse(req1.responseText);
        data.forEach(user => {
            if (user.name.includes('Clementin')) {
                console.log(user.name);
            }
        });
    } else if (req1.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

req1.open('GET', 'https://jsonplaceholder.typicode.com/users');
req1.send();

// zadatak 4 

let req2 = new XMLHttpRequest();
req2.addEventListener('readystatechange', () => {
    if (req2.readyState === 4 && req2.status === 200) {
        let data = JSON.parse(req2.responseText);
        data.forEach(user => {
            if (user.company.name.includes('Group') || user.company.name.includes('LLC')) {
                console.log(user.name);
            }

        });
    } else if (req2.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

req2.open('GET', 'https://jsonplaceholder.typicode.com/users');
req2.send();

//zadatak 5

let req3 = new XMLHttpRequest();
req3.addEventListener('readystatechange', () => {
    if (req3.readyState === 4 && req3.status === 200) {
        let data = JSON.parse(req3.responseText);
        let cities = [];
        data.forEach(user => {

            if (!cities.includes(user.address.city)) {
                cities.push(user.address.city);
            }
        });

        console.log(cities);

    } else if (req3.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

req3.open('GET', 'https://jsonplaceholder.typicode.com/users');
req3.send();

// zadatak 6

let req4 = new XMLHttpRequest();
req4.addEventListener('readystatechange', () => {
    if (req4.readyState === 4 && req4.status === 200) {
        let data = JSON.parse(req4.responseText);

        data.forEach(user => {
            if (Number(user.address.geo.lat) < 0 && Number(user.address.geo.lng) < 0) {
                console.log(user.name);
            }
        });
    } else if (req4.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }

});

req4.open('GET', 'https://jsonplaceholder.typicode.com/users');
req4.send();

//zadatak 2 preko callback funkcije

let getKorisniciWeb = callback => {

    let req = new XMLHttpRequest();
    req.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            callback(undefined, data);
        } else if (this.readyState === 4) {
            callback('Server nije mogao da obradi zahtev', undefined);
        }
    });

    req.open('GET', 'https://jsonplaceholder.typicode.com/users');
    req.send();

};

getKorisniciWeb((error, data) => {
    if (error) {
        console.log(error);
    } else {
        data.forEach(user => {
            if (user.website.includes('.com')) {
                console.log(user.name);
            }
        });
    }

});

function usersClementin(error, users) {
    if (error) {
        let div = document.getElementById('error');
        div.textContent = error;
    } else {
        users.forEach(user => {
            if (user.name.includes('Clementin')) {
                console.log(user.name);
            }
        });
    }

}


getKorisniciWeb(usersClementin);


function companyName(error, users) {
    if (error) {
        let div = document.getElementById('error');
        div.textContent = error;
    } else {
        users.forEach(user => {
            if (user.company.name.includes('Group') || user.company.name.includes('LLC')) {
                console.log(user.name);
            }
        });
    }
}

getKorisniciWeb(companyName);


getKorisniciWeb((greska, gradovi) => {
    let cities = [];
    if (greska) {
        let div = document.getElementById('error');
        div.textContent = greska;
    } else {
        gradovi.forEach(grad => {
            if (!cities.includes(grad.address.city)) {
                cities.push(grad.address.city);
            }
            

        });
        console.log(cities);
    }
});

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


getSportistiWeb((greska, name) => {
    if (greska) {
        let div = document.getElementById('error');
        div.textContent = greska;
    } else {
        name.forEach(player => {
            console.log(player.imePrezime);
        });
    }
});












