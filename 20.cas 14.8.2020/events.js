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
