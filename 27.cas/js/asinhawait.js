//asinhrona funkija uvek kao rezultat vraca promise
let testAsinh = async () => {

}

let test = testAsinh();

console.log(test);

let getItems = async () => {
    //await se koristi samo u async funkcijama i zaustavlja izvrsenje dok se ne dobije result.
    let response = await fetch('./json/fruits.json');
    // console.log (response.json());
    let data = await response.json();
    console.log (data);
    return data;
};

getItems().then(data => {
    console.log(data);
    data.forEach(fruit => {
        console.log(fruit.name);
        
    });
}).catch(err => {
    console.log (err);
});

getItems().then(data => console.log(data)).catch(err => console.log (err));
