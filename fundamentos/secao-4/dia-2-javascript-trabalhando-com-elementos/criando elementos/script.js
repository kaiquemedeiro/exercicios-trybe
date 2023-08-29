//criando nova div
//Crie um irmão para elementoOndeVoceEsta:

let newElement1 = document.createElement('section');

//settando atributo id como segundofilho
newElement1.setAttribute('id', 'segundoFilho');

//pegando o elemento pai
const pai = document.getElementById('pai');

//adicionando no elemento pai o seu novo filho, que é irmão que pediu exercicios
pai.appendChild(newElement1);

console.log(pai);

// Crie um filho para elementoOndeVoceEsta:

//pegando o elementoOndeVoceEsta
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta')

//criando segundo novo elemento
let newElement2 = document.createElement('section');

//setando o id e nome id do segundo novo elemento
newElement2.setAttribute('id', 'filhoElementoOndeVoceEsta');

//adicionando o elemento no pai designado pelo enunciado
elementoOndeVoceEsta.appendChild(newElement2);

//imprimindo resultado da tag
console.log(elementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho:

//criando terceiro elemento
let newElement3 = document.createElement('section');

//setando no terceiro

newElement3.setAttribute('id', 'filhoDoPrimeiroFilhoDoFilho');

//pegando o primeiroFilhodoFilho
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

//adicionando tudo no pai em questão que é primeiroFilhoDoFilho

primeiroFilhoDoFilho.appendChild(newElement3);

console.log(primeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho:

//acessando:
const  primeiroFilhoDoFilhoPeloTerceiroFilho = document.getElementById('terceiroFilho').previousElementSibling.firstElementChild.firstChild;

console.log(primeiroFilhoDoFilhoPeloTerceiroFilho);




