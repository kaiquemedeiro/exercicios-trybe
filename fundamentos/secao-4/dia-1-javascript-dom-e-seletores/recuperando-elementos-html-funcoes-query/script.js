console.log('Hello!');

const header = document.querySelector("#header-container");

header.style.backgroundColor = 'rgb(0, 176, 105)';

const urgenteImportanteDiv = document.querySelector('.emergency-tasks');

urgenteImportanteDiv.style.backgroundColor = 'rgb(255, 159, 132)';

const urgenteImportanteTitulo = document.querySelectorAll('.emergency-tasks h3');

urgenteImportanteTitulo.forEach(element => {
    element.style.backgroundColor = 'rgb(165, 0, 243)';
    
});


const notUrgent = document.querySelector(".no-emergency-tasks");

notUrgent.style.backgroundColor = ' rgb(249, 219, 94)';

const notUrgentTitulo = document.querySelectorAll('.no-emergency-tasks h3');

notUrgentTitulo.forEach(element => {
    element.style.backgroundColor = 'rgb(35, 37, 37)';
    
});

const footer = document.querySelector('#footer-container');

footer.style.backgroundColor = 'rgb(0, 53, 51)';

const body = document.querySelector('#container');

body.style.color = 'rgb(255, 255, 255)';

