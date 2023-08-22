const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

let contadorImpar = 0;

for (let index of numbers) {
    console.log(index);
    if ((index%2) === 1) {
        contadorImpar += 1;
    }
    if (total === 0) {
        maior = index;
    } else {
        if (index > maior) {
            maior = index;
        }
    }
    total += index;
}

let media = total / (numbers.length);

console.log(`A soma do valor é: ${total}`);

console.log(`A média é: ${media}`);

media > 20 ? console.log('O valor da média aritmética é maior que 20')
: console.log('O valor da média aritmética é menor ou igual a 20');

console.log(`O maior valor é: ${maior}`);

console.log(`A quantidade de ímpares é: ${contadorImpar}`);