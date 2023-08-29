document.getElementById('page-title').innerText = 'Carros';

document.getElementById('first-paragraph').innerText = 'Relâmpago McQueen (Owen Wilson) é um carro de corridas ambicioso, que já em sua 1ª temporada na Copa Pistão torna-se um astro. Ele sonha em se tornar o 1º estreante a vencer o campeonato, o que possibilitaria que assinasse um patrocínio com a cobiçada Dinoco.';

document.getElementById('subtitle').innerText = 'Principais informações.';

let stylePaaragraph = document.getElementsByClassName('paragraph-style')[0];

console.log(stylePaaragraph);

stylePaaragraph.style.fontStyle = 'italic';

let secondParagraph = document.getElementsByClassName('paragraph-style')[1];

secondParagraph.innerText = 'Direção: Carros foi dirigido por John Lasseter. Roteirista: O roteiro do filme Carros: foi escrito por John Lasseter, Joe Ranft, Jorgen Klubien, Dan Fogelman, Kiel Murray, Phil Lorin, e Robert L. Baird.';

let subTittle = document.getElementsByTagName('h2'); 

subTittle[0].style.color = 'gray';