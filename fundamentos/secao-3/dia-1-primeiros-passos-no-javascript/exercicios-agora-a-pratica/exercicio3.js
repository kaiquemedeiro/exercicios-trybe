let num1 = 400;

let num2 = 200;

let num3 = 300;

let maior;

maior = num1;
if (num2 > maior) {
    maior = num2;
    if (num3 > maior) {
        maior = num3;
    }
}
else if (num3 > maior) {
    maior = num3;
}

console.log(maior);