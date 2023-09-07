// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', function(event) {
    event.preventDefault();
});

inputCheckbox.addEventListener('click', function(event) {
    event.preventDefault();
});

inputText.addEventListener('keypress', function(event) {
    if (event.key !== 'a')
    event.preventDefault();
});