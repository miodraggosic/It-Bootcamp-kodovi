let todos = (resource, callback) => {
    let req = new XMLHttpRequest();
    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            let data = JSON.parse(req.responseText);
            callback(undefined, data);
        } else if (req.readyState === 4) {
            callback('Server nije mogao da obradi zahtev', undefined);
        }
    });
    req.open('GET', resource);
    req.send();
};

todos('./json/fruits.json', (err,data) => {
    console.log("callback");
    todos('./json/vegetables.json', (err,data) => {
        console.log("callback2");
        todos('./json/cereals.json', (err,data) => {
            console.log("callback3");
        });
    });
});


