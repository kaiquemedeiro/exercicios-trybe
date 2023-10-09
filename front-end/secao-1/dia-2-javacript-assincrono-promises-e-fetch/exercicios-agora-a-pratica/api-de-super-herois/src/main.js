const $button = document.querySelector('button');

const updateImg = (urlImage) => {
  const $img = document.querySelector('img');

  $img.src = urlImage;
};

const updateName = (data) => {
  const indiceSorteado = Math.floor(Math.random() * data.length);

  const objPicked = data[indiceSorteado];

  const $h3 = document.querySelector('h3');

  $h3.innerText = objPicked.name;

  updateImg(objPicked.images.md);
};


$button.addEventListener('click', () => {
  const superHeroApi = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  fetch(superHeroApi)
    .then((response) => response.json())
    .then((data) => {
      updateName(data);
    }).catch((error) => {
    //Trataremos o erro aqui
    });
});
