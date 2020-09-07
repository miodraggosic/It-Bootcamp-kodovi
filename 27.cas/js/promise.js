//alternativa z acallbackhell

// promise ceka odgovor 
// odgovor moze imati dve vredonsti
// resolved
// rejected

let getSome = () => {
    return new Promise((resolve, reject) => {
        // resolve('resolv...');
        reject('reject...');
    });
};

// let test = getSome();
// console.log(test);

//rukovanje promisom

getSome().then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

//rukovanje promisom 2nacin

getSome().then(data => {
    console.log(data);
}, err => {
    console.log (err);
})