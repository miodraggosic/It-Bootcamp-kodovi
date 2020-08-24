// setTimeout(funkcija, miliseconds)
let btn1 = document.getElementById("btn1");
let divRes = document.getElementById('result');
let btn2 = document.getElementById('btn2');

// btn1.addEventListener("click", ( )=> {
//     setTimeout(() => {
//         console.log ("zdravo1")
//     }, 2000);
//     setTimeout(() => {
//         console.log('zdravo2')
//     }, 1000 / 2);
// }); asinhrono pozivanje izvrsenja komande

let timer = null;

btn1.addEventListener('click', () => {
    let date = new Date();
    let sati = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    timer = setTimeout(() => {
        divRes.textContent = `${sati}:${min}:${sec}`
    }, 1000);
});



let secClock = setInterval(() => {
    let date = new Date();
    let sec = date.getSeconds();
   divRes.textContent = `Trenutni br sekundi je ${sec}`; 
}, 1000);

btn2.addEventListener('click', () => {
    clearTimeout(secClock);
});


let clock = setInterval(() => {
    let date = new Date();
    let sati = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let count = 0
    if(sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sati < 10) {
        sati = "0" + sati;
    }
    divRes.textContent = `Trenutno vreme je: ${sati}h ${min}m ${sec}s.`
    
}, 1000);


let btnStart = document.getElementById('start');
let btnFinish = document.getElementById('finish');
let ispisSpan = document.getElementById('ispis');


let counter = null;
btnStart.addEventListener('click', () => {
    if (counter == null) {
        counter = setInterval(() => {
            ispisSpan.value = Number(ispisSpan.value) + 1;
        }, 1000);
    }
});

btnFinish.addEventListener('click', ()=>{
    clearInterval(counter);
});
