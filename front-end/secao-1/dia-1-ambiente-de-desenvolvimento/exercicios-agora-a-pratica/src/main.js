import validator from 'validator';

import './style.css';

const BtnElement = document.querySelector('button');

BtnElement.addEventListener('click', () => {
    const inputElement = document.querySelector('input');

    const inputValue = inputElement.value;

    const h3element = document.querySelector('h3');

    const selectValue = document.querySelector('#select-types').value;

    const objValidation = {
        email: validator.isEmail(inputValue),
        cpf: validator.isTaxID(inputValue, 'pt-BR'),
    };

    const resultValidation = objValidation[selectValue];

    h3element.innerText = `A validação retornou ${resultValidation}`;
});
