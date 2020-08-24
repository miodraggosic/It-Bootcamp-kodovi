let name = document.getElementById("name");
let btnSubmit = document.getElementById("submit");



let form = document.querySelector("form");


let rez = document.getElementById('result');

form.addEventListener("submit", event =>{
    event.preventDefault();
    let res = "";
    res += `Ime i prezime: ${name.value}`;
    let inpGender = document.querySelector("input[name = 'gender']:checked")
    let inpTech = document.querySelectorAll('input[name = "tech"]:checked');
    let pol = inpGender.value;
    if (pol == "m") {
        res += " Pol: muski ";
    } else if (pol == "f") {
        res += " Pol: zenski ";
    } else {
        res += " Pol: drugo ";
    }

    inpTech.forEach (elem => {
       res += `${elem.value}`;
       
    })

    //ispis tehnologija

    
    // let lista = document.createElement("ul");
    // lista.appendChild(rez);
    // inpTech.forEach(elem => {
    //     let item = document.createElement("li");
    //     item.appendChild(lista);
    //     item.textContent = elem.value;
    // });
    rez.textContent = res;
    form.reset();
})