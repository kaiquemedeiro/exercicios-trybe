//Acesse o elemento where-are-you.
const whereAreYou = document.getElementById('where-are-you');

console.log(whereAreYou);

//Acesse parent a partir de where-are-you e adicione uma color a ele.
const parentWhereAreYou = whereAreYou.parentNode;

console.log(parentWhereAreYou);

parentWhereAreYou.style.color = 'rgb(255,0,0)';

//Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.

const firstChildOfChild = whereAreYou.firstElementChild;

console.log(firstChildOfChild);

firstChildOfChild.innerText = 'Novo texto adicionado!';

//Acesse o first-child a partir de parent.

const firstChild = document.getElementById('parent').firstElementChild;

console.log(firstChild);

//Acesse o first-child a partir de where-are-you.

const firstChildWhereAreYou = whereAreYou.previousElementSibling;

console.log(firstChildWhereAreYou);

//Acesse o texto Attention! a partir de where-are-you.

const attention = whereAreYou.nextSibling;

console.log(attention);

//Acesse o third-child a partir de where-are-you.

let thirChild = whereAreYou.nextElementSibling;

console.log(thirChild);

//Acesse o third-child a partir de parent.

thirChild = parentWhereAreYou.lastElementChild.previousElementSibling;

console.log(thirChild);


