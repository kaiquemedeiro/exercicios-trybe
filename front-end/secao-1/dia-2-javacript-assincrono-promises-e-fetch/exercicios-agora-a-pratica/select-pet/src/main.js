
const btnDog = document.querySelector('#dog');

const btnCat = document.querySelector('#cat');

const btnRandomAnimal = document.querySelector('#surprise');

const $img = document.querySelector('img');

btnDog.addEventListener('click', () => {
    const linkDogRandom = 'https://dog.ceo/api/breeds/image/random';
    fetch(linkDogRandom)
    .then((response) => response.json())
    .then((objData) => {
        $img.src = objData.message;
    }) 
});

btnCat.addEventListener('click', () => {
    const linkCatRandom = 'https://api.thecatapi.com/v1/images/search';
    fetch(linkCatRandom)
    .then((response) => response.json())
    .then((objData) => {
        $img.src = objData[0].url;
    }) 
});

btnRandomAnimal.addEventListener('click', () => {
    Promise.race([fetch('https://dog.ceo/api/breeds/image/random'), fetch('https://api.thecatapi.com/v1/images/search')])
        .then((resp) => resp.json())
        .then((data) => {
            const urlFinal = data.message || data[0].url;

            $img.src = urlFinal;
        })
});