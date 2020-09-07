let test = fetch("./json/fruits.json");
console.log(test); //vraca promise 

fetch("./json/fruits.json").then(response => { //1. fetch json fajl 2. prva then grana vraca response
    console.log("resolved", response);
    return response.json()                      
}).then(data => {               //3. uzetei podatke iz responsa
    console.log(data);
}).catch(err => {
    console.log ('rejacted', err);// vraca u koliko je doslo do network error
});



// zadatak 1 
fetch("./json/fruits.json").then(response => {
    return response.json();
}).then(data => {
    data.forEach(fruit => { 
        if(fruit.name.includes('berries')) {
            console.log (fruit.name);
        }
    });
}).catch(err => {
    console.log(err);
});


//zadatak 2 

fetch("./json/fruits.json").then(response => {
    return response.json();
}).then(data => {
    let count = 0;
    data.forEach(fruit => { 
        if(!fruit.name.includes('berries')) {
            console.log (fruit.name);
            count++;
        }
    }); console.log (count);
}).catch(err => {
    console.log(err);
});


//zadatak 3 

