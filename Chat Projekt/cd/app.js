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


// oznacavanje zadnje ucitane sobe

let lastRoom = checkRoom();
let roomLink = document.querySelector(`#${lastRoom}`);
roomLink.classList.add('clicked');




//kreiranje objekta chatUI
let ulChatList = document.querySelector('#msg ul');
let chatUI = new ChatUI (ulChatList);
ch.getChats(data => {
    chatUI.templateLi(data);
    userShow();

});

// slanje nove poruke

let btnSend = document.querySelector('#btnSend');
let inpTxt = document.querySelector('#msgText');
btnSend.addEventListener('click', event => {
    let msg = inpTxt.value;
    ch.addChat(msg).then(() => {
        inpTxt.value = '';
        userShow();
    }).catch(err => {
        console.log(err);
    })
});

// updajte usename

let btnUpdate = document.querySelector('#btnUpdate');
let inpUser = document.querySelector('#updateUser');
let userNtf = document.querySelector('#ntf');


btnUpdate.addEventListener('click', event => {
    let upd = inpUser.value;
    ch.updateUsername(upd);
    userNtf.textContent = upd;
    userNtf.setAttribute('style', 'display: block;');
    setTimeout(function () {
        userNtf.setAttribute('style', 'display: none;');
    }, 3000)
    userShow();
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
        chatUI.clear();
        ch.getChats(data => chatUI.templateLi(data));
        userShow();
    }
});

// user poruke u desnu stranu

let userShow = () => {
    setTimeout(function () {
        let currentUser = checkUser();
        let userDisplay = document.querySelectorAll('.user');
        userDisplay.forEach(elem => {
            elem.parentElement.classList.remove('curUser');
            if(elem.textContent == currentUser) {
                let parentLi = elem.parentElement;
                parentLi.classList.add('curUser');
            }
        });
        let scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }, 1500);
};









