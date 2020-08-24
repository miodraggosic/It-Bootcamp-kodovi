let inpName = document.querySelector("input[name=name]");
console.log(inpName);
let inpEmail = document.querySelector("input[name=address]");
console.log(inpEmail);
let inpCheck = document.querySelectorAll("input[name=additional]");
console.log(inpCheck);
let price = document.getElementById("price");
let cena = parseInt(price.textContent);

inpCheck.forEach(checkbox => {
        checkbox.addEventListener("click", () => {
            if(checkbox.checked){
                cena += Number(checkbox.value);
            } else {
                cena -= Number(checkbox.value);
            }
            console.log(cena);
            price.textContent = `${cena}$`;
    });
});