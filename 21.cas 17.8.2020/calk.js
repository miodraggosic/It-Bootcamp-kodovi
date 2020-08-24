// calkulator


let nmbr1 = document.getElementById("num1");
let nmbr2 = document.getElementById("num2");

let radio = document.querySelectorAll ("input[name = 'op']");

let form = document.querySelector ("form");
let rez = document.getElementById("rez");

let racunaljka = (num1, num2, operacija) => {
    // Number.isFinite(num1) da li je br ili decimalni
    // Number.isInteger (num1); da li je ceo br?
    // vrsenje validacije
    if (Number.isFinite(num1) && Number.isFinite(num2)){
        
        if (operacija == "+") {
            res = num1 + num2;
        } else if (operacija == "-") {
            res = num1 - num2;
        } else if (operacija == "*") {
            res = num1 * num2;
        } else {
            if(num2 == 0) {
                alert("nije dozvoljeno deliti nulom");
                res = "?";
            } else {
                res = num1 / num2;
            }
            
        }
        rez.innerHTML = `${num1} ${operacija} ${num2} = ${res}`;
    } else {
        alert("Unosi moraju biti numericke vrednosti");
    }

}



form.addEventListener ("submit", event => {
    event.preventDefault();
    let num1 = Number(nmbr1.value);
    let num2 = Number(nmbr2.value);

    let radio1 = document.querySelector ("input[name = 'op']:checked");
    let operacija = radio1.value;

    racunaljka(num1, num2, operacija);
});