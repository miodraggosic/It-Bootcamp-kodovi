let liItems = document.querySelectorAll("li");


liItems.forEach(elem => {
    elem.addEventListener("click", event => {
        event.preventDefault();
        if (elem.style.textDecoration == "line-through") {
            elem.style.textDecoration = "none";
        } else {
            elem.style.textDecoration = "line-through";
        }
    });
});