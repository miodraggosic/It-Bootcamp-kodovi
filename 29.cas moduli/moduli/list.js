import generateImg from './general.js';
function generateList (parent) {
    let tag = document.querySelector(parent);
    let ul = document.createElement('ul');
    tag.appendChild(ul);
}

function generateItem (parent, src) {
    let tag = document.querySelector(parent);
    let li = document.createElement('li');
    let img = generateImg(src);
    li.appendChild(img);
    tag.appendChild(li);
}

export {generateList, generateItem};