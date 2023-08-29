const pai = document.getElementById('where-are-you');

const filho = pai.lastElementChild;

console.log(filho);

pai.removeChild(filho);

console.log(pai);