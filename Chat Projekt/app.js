import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';



// provera u lokalnoj memoriji
let checkUser = () => {
    if (localStorage.userName) {
        return localStorage.userName;
    } else {
        return "Guest";
    }
}
let checkRoom = () => {
    if(localStorage.room) {
        return localStorage.room;
    } else {
        return 'General';
    }
}




let ch = new Chatroom (checkRoom(), checkUser());


//kreiranje objekta chatUI
let ulChatList = document.querySelector('#msg ul');
let chatUI1 = new ChatUI (ulChatList);
ch.getChats(data => chatUI1.templateLi(data));

// slanje nove poruke

let btnSend = document.querySelector('#btnSend');
let inpTxt = document.querySelector('#msgText');
btnSend.addEventListener('click', event => {
    let msg = inpTxt.value;
    ch.addChat(msg);
    // ch3.getChats(data => chatUI1.templateLi(data));
    inpTxt.value = '';
});

// updajte usename

let btnUpdate = document.querySelector('#btnUpdate');
let inpUser = document.querySelector('#updateUser');

btnUpdate.addEventListener('click', event => {
    let upd = inpUser.value;
    ch.updateUsername(upd);
    inpUser.value = '';
});

// promena sobe u kojoj se nalazimo

let nav = document.querySelector('nav');
let rooms = document.querySelectorAll('a');
let removeClass = () => {
    rooms.forEach(elem => {
        elem.classList.remove('clicked');
    });
};

nav.addEventListener('click', event => {
        removeClass();
    if(event.target.tagName == 'A') {
        let tag = event.target;
        tag.classList.add('clicked');
        
        let newRoom = event.target.getAttribute('id');
        ch.updateRoom(newRoom);
        chatUI1.clear();
        ch.getChats(data => chatUI1.templateLi(data));
    }
});



