let dugme = document.querySelector ("button:last-of-type");
let pPrint = document.querySelector("p");
let minus = document.querySelector("#minus");
let plus = document.getElementById("plus");
let spanP = document.querySelector('span');

dugme.addEventListener("dblclick", () => {
    console.log ("dblclicked");
});

let brojac = document.getElementById("brojac");
let count = 1;
brojac.addEventListener("click", () => {
    console.log (count);
    pPrint.innerHTML = count; 
    count++;
});

let rez = 0;
spanP.innerHTML = rez;

minus.addEventListener("click", () => {
    rez--;
    if (rez <= 0) {
        rez = 0;
    } 
    spanP.innerHTML = rez;
});

plus.addEventListener ('click', () => {
    rez++;
    spanP.innerHTML = rez;
});


let inputIme = document.getElementById("ime");
let btnSubmitIme = document.getElementById("sub");
let printP = document.getElementById("print");

btnSubmitIme.addEventListener("click", () => {
    let name = inputIme.value;
    printP.innerHTML = "helloo " + name;
    inputIme.value = "";
});


//zadatak 7;

let inputKv = document.getElementById("num1");
let inputBtn = document.getElementById("kvadrat");
let pRez = document.getElementById("rez");

// inputBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let num1 = inputKv.value;
//     let rez = num1 ** 2;
//     console.log(rez);
//     pRez.innerHTML = rez;
// })

// kada imamo submit dugme forme i to samo jedno
let form = document.querySelector("form");

form.addEventListener ("submit", event => {
    event.preventDefault();
    let rez = inputKv.value **2;
    pRez.innerHTML = rez;
});


let inpPola = document.getElementById("num2");
let btnPola = document.getElementById("pola");
let pRez1 = document.getElementById("rez1");

btnPola.addEventListener("click", event => {
    event.preventDefault();
    let rez = inpPola.value / 2;
    pRez1.innerHTML = rez;
});

let inpPoluprecnik = document.getElementById("num3");
let btnPovrsina = document.getElementById("povrs");
let pRez2 = document.getElementById("rez2");

btnPovrsina.addEventListener ("click", event => {
    event.preventDefault();
    let rez = inpPoluprecnik.value**2 * 3.14;
    pRez2.innerHTML = rez; 
})

