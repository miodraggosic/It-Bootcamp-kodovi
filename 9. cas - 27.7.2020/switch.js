//zadatak 2

let ocena = 2;

switch (ocena) {
    case 1:
        console.log ("nedovoljan");
        break;
    case 2: 
        console.log ("dovoljan");
        break;
    case 3: 
        console.log ("dobar");
        break;
    case 4: case 5:

        console.log ("vrlo dobar ili odlican");
        break;

    default:
        console.log ("ne postoji ocena");

}

//zadatak 7 

let date = new Date ();
let mes = date.getMonth ();
mes++;
let god = date.getFullYear ();

switch (mes) {
    case 1:
        console.log ("januar 31");
        break;
    case 2: 
        if (god % 4 == 0 && god % 100 != 0 || god % 400 ==0 ){
            console.log ("prestupna godina februar 29 ");
        } else {
            console.log ("februar 28 ");
        }
        
        break;

    case 3:
            console.log ("mart 31");
            break;
    case 4:
            console.log ("april 30");
            break;
    case 5: 
            console.log ("maj 31")
            break;
    case 6:
            console.log ("jun 30")
            break;
    case 7:
            console.log ("jul 31")
            break;
    case 8:
            console.log ("avgust 30")
            break;    
    case 9:
            console.log ("septembar 31")
            break;
    case 10:
            console.log ("oktobar 30")
            break;
    case 11:
            console.log ("novembar 31")
            break;
    case 12:
            console.log ("decembar 30")
            break;
}


//zadatak 8

let boja = "zeleno";
let par = document.getElementById("par1");


switch (boja) {
    case "crveno":
        par.style.color = "red" ;
        break;

    case "plavo":
        par.style.color = "blue";
        break;

    case "zeleno":
        par.style.color = "green";
        break;
    default: 
        par.style.color = "yellow";
}


//zadatak 5 

let dan = date.getDay ();
console.log (dan);

let ddW = 6 - dan;

switch (ddW) {
    case 0:
        console.log ("vikend ura");
        break;

    case 1: 
        console.log("jedan dan do wekenda");
        break;

    case 2:
        console.log("dva dana do wekenda");
        break;

    case 3:
        console.log("tri dana do vikenda ");
        break;
    case 4:
        console.log ("cetiri dana do vikenda") ;
        break;
    case 5: 
        console.log("pet dana do vikenda ");
        break;

    default:
        console.log ("vikend ura");

}

// zadatak 4 






//js vezvanje zajecar