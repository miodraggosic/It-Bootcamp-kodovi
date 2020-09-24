import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

let checkUser = () => {
    if (localStorage.userName) {
        return localStorage.userName;
    } else {
        return "Guest";
    }
}



let ch1 = new Chatroom ('Js', 'Mio');
console.log (ch1.username, ch1.room);

let ch2 = new Chatroom ('General', checkUser());
console.log (ch2.username, ch2.room);
let ch3 = new Chatroom ('Tests', checkUser());
console.log (ch3.username, ch3.room);

// ch1.addChat('Prva poruka');
// ch2.addChat('Druga poruka');
// ch3.addChat('Treca poruka');

// ch2.updateRoom('General');
// ch1.getChats(data => {
//     console.log(data);
// });

// ch1.getChats(data => {
//     console.log(data);
// });
// ch1.updateUsername('Beo');
// ch1.addChat('Cetvrta poruka');
// ch2.getChats(data => {
//     console.log(data);
// });

// ch3.getChats(data => {
//     console.log (data);
// });

//kreiranje objekta chatUI
let ulChatList = document.querySelector('#msg ul');
let chatUI1 = new ChatUI (ulChatList);
ch2.getChats(data => chatUI1.templateLi(data));

// slanje nove poruke

let btnSend = document.querySelector('#btnSend');
let inpTxt = document.querySelector('#msgText');
btnSend.addEventListener('click', event => {
    let msg = inpTxt.value;
    ch2.addChat(msg);
    // ch3.getChats(data => chatUI1.templateLi(data));
    inpTxt.value = '';
});

// updajte usename

let btnUpdate = document.querySelector('#btnUpdate');
let inpUser = document.querySelector('#updateUser');

btnUpdate.addEventListener('click', event => {
    let upd = inpUser.value;
    ch2.updateUsername(upd);
    inpUser.value = '';
});



