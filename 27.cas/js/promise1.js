let todos = resource => {
    let req = new XMLHttpRequest();

    return new Promise ((resolve, reject) => {
        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                let data = JSON.parse(req.responseText);
                resolve(data);
            } else if (req.readyState === 4) {
                reject('greska');
            }
        });
        req.open('GET', resource);
        req.send();
    })
};

todos('./json/fruits.json').then(data => {
    console.log ('resolved', data);
}).catch(err => {
    console.log('rejected', err);
});

//chaining promises - ulancavanje
//nacin izbegavanja callbach hella

todos('./json/fruits.json').then(data => {
    console.log('resolved1', data);
    return todos('./json/vegetables.json')
}).then(data => {
    console.log('resolved2', data);
    return todos('./json/cereals.json')
}).then(data => {
    console.log('resolved3', data);
}).catch(err => {
        console.log('rejected', err);
    });


