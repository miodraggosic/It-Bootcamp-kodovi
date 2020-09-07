let body = document.querySelector ('body');
console.log (body);

let getItems = async () => {
    let response = await fetch('./json/fruits.json');
    if (response.status != 200) {
        //doslo je do greske
        throw new Error ('Doslo je do greske 1')
    }
    let data = await response.json();
    console.log (data);

    response = await fetch('./json/vegetables.json');
    if (response.status != 200) {
        //doslo je do greske
        throw new Error ('Doslo je do greske 2')
    }
    data = await response.json();
    console.log (data);

}   

getItems();




let ispisViP = async () => {
    // voce 
    let response = await fetch('./json/fruits.json');
    if (response.status != 200) {
        throw new Error ('Doslo je do greske 1')
    }
    let data = await response.json();
    let tezVoca = 0;
    let h3 = document.createElement('h3');
    h3.textContent = 'Fruits';
    body.appendChild(h3);
    let ul = document.createElement('ul');
    
    data.forEach(fruit => {
        tezVoca += Number(fruit.kilogram);
        let li = document.createElement('li');
        li.textContent = fruit.name;
        ul.appendChild(li);
    });

    let para = document.createElement('p');
    para.textContent = tezVoca;
    body.appendChild(ul);
    body.appendChild(para);
    // povrce
    response = await fetch('./json/vegetables.json');
    if (response.status != 200) {
        throw new Error ('Doslo je do greske 1')
    }
    data = await response.json();
    let tezPovrca = 0;
    h3 = document.createElement('h3');
    h3.textContent = 'Vegetables';
    body.appendChild(h3);
    ul = document.createElement('ul');

    data.forEach(vege => {
        tezPovrca += Number(vege.kilogram);
        let li = document.createElement('li');
        li.textContent = vege.name;
        ul.appendChild(li);
    });
    para = document.createElement('p');
    para.textContent = tezPovrca;
    body.appendChild(ul);
    body.appendChild(para);

    return tezVoca + tezPovrca;
};


ispisViP().then(data => {
    console.log(data);
}).catch(err => {
    console.log (err);
});