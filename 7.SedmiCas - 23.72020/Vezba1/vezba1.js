let h = 10;
let m = 26;
let z = (h * 60) + m;
console.log (z);


let sati = Math.floor(z / 60);
console.log (sati);

let minuti = z % 60;
console.log (minuti);


let hleb = 50;
let sir = 400;
let novac = 500;
let kusur = novac - sir - hleb;

console.log (kusur);

let date = new Date ();
console.log (date);
let hour = date.getHours ();
let min = date.getMinutes ();

console.log (hour + ":" + min);


let y = date.getFullYear ();
let month = date.getMonth ();
month++;
let d = date.getDate ();

console.log (d, month, y);

console.log (hour * 60 + min);


// zadatak 6

let euro = 100;
let dinar = 1000;
let dolar = 200;

let kurs = 117.59;


console.log (euro * kurs);
console.log (Math.trunc (dinar / kurs));

// zadatak 7

let kurs1 = 101.52;
let DolartoEur = Math.trunc (dolar * kurs1 / kurs);

console.log (DolartoEur);

// zadatak 8

let cel = 27;
let far = 72;

let FartoCel = cel * 1.8 + 32;
console.log (FartoCel);

let CeltoFar = far / 1.8 + 32;
console.log (CeltoFar);

// zadatak 9

let kel = 252;

let CeltoKel = cel + 273.15;
let KeltoCel = kel - 273.15 ;

console.log (CeltoKel, KeltoCel);

















