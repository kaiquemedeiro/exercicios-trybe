// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(palavra) {
  let letras = palavra.split('').reverse();
  let novaPalavra = letras.join('');
  const palavraUp = palavra.toUpperCase();
  const novaPalavraUp = novaPalavra.toUpperCase();
  if (palavraUp === novaPalavraUp) {
    return true;
  }
  return false;
}

// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(lista) {
  let posicao;
  let valor;
  for (let index of lista) {
    if (typeof posicao === 'undefined') {
      posicao = lista.indexOf(index);
      valor = index;
    }
    if (index > valor) {
      posicao = lista.indexOf(index);
      valor = index;
    }
  }
  return posicao;
}

// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(lista) {
  let posicao;
  let valor;
  for (let index of lista) {
    if (typeof posicao === 'undefined') {
      posicao = lista.indexOf(index);
      valor = index;
    }
    if (index < valor) {
      posicao = lista.indexOf(index);
      valor = index;
    }
  }
  return posicao;
}

let numeros1 = [10, 50, 30, -60];
getSmallestIndex(numeros1);

// Requisito 4 - Crie a função getLongestWord
function getLongestWord(lista) {
  let maiorNome;
  for (let nome of lista) {
    if (typeof maiorNome === 'undefined') {
      maiorNome = nome;
    }
    if (maiorNome.length < nome.length) {
      maiorNome = nome;
    }
  }
  return maiorNome;
}

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
function countHighestNumberMaxOccurrences(lista) {
  let valorMaior = lista[0];
  let contadorMaior = 0;
  for (let index of lista) {
    if (index > valorMaior) {
      valorMaior = index;
      contadorMaior = 1;
    } else if (index === valorMaior) {
      contadorMaior += 1;
    }
  }
  return contadorMaior;
}

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
